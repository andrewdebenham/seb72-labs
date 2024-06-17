const prompt = require('prompt-sync')();

require('dotenv').config();
const mongoose = require('mongoose');

const Customer = require('./models/customer.js');

const connectRunAndClose = async () => {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    console.log('Welcome to Andys CRN\n');
    await chooseAction();
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
    process.exit();
}

const init = async () => {
    console.log('What would you like to do?\n');
    console.log('   1. Create a customer');
    console.log('   2. View all customers');
    console.log('   3. Update a customer');
    console.log('   4. Delete a customer');
    console.log('   5. Quit\n');

    const actionToRun = prompt('Number of action to run: ');
    return actionToRun;
}

const chooseAction = async () => {
    const action = await init();
    if (action === '1') {
        await createCustomer();
    } else if (action === '2') {
        await viewCustomers();
    } else if (action === '3') {
        await updateCustomer();
    } else if (action === '4') {
        await deleteCustomer();
    } else if (action === '5') {
        return;
    }
}

const createCustomer = async () => {
    const name = prompt('What is the customers name? ');
    const age = parseInt(prompt('What is the customers age? '), 10);
    await Customer.create({
        name: name,
        age: age,
    });
    console.log(`\nCustomer ${name} has been created.\n`);

    await chooseAction();
}

const deleteCustomer = async () => {
    const customers = await Customer.find({});
    console.log('Below is a list of all customers:\n');

    customers.forEach((customer) => {
        console.log(`Id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`);
    });
    console.log(' ');

    const customerId = prompt('Copy and paste the id of the customer you would like to delete here: ');
    await Customer.deleteOne({_id: customerId});
    console.log(`Customer with id: ${customerId} has been deleted.\n`)

    await chooseAction();
}

const viewCustomers = async () => {
    const customers = await Customer.find({});
    console.log('\nBelow is a list of all customers:\n');

    customers.forEach((customer) => {
        console.log(`Name: ${customer.name}, Age: ${customer.age}`)
    });
    console.log(' ');

    await chooseAction();
}

const updateCustomer = async () => {
    const customers = await Customer.find({});
    console.log('Below is a list of all customers:\n');

    customers.forEach((customer) => {
        console.log(`Id: ${customer._id} -- Name: ${customer.name}, Age: ${customer.age}`);
    });
    console.log(' ');

    const customerId = prompt('Copy and paste the id of the customer you would like to update here: ');

    const name = prompt('Update the customers name here: ');
    const age = parseInt(prompt('Update the customers age here: '), 10);

    await Customer.findByIdAndUpdate(customerId, {
        name: name,
        age: age,
    });

    console.log(`Customer ${name} has been updated.`);
    await chooseAction();
}

connectRunAndClose();
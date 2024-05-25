# Creating a File Using the Terminal

![New File Creation](https://images.unsplash.com/photo-1512317049220-d3c6fcaf6681?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmV3JTIwZmlsZXxlbnwwfHwwfHx8MA%3D%3D)

The terminal is a useful tool in navigating and manipulating your system's files and directories. In this tutorial we will learn how to create a new file using the terminal window.

## 1. Navigate to the desired directory

First we need to launch the **terminal** app and navigate to the desired parent directory for our new file.

```
cd ~/Desktop/MyFiles
```

using the above command we are telling the terminal to change directory with **cd** followed by the path for the desired folder **~/Desktop/MyFiles**.

## 2. Create a new file

Now that we are inside our desired directory, we can use the below command to create our file:

```
touch myfile.txt
```

1. **touch** tells the terminal that we are creating a new file
1. **myfile.txt** specifies the name and type of the file we want to create

## 3. Check that the file exists

Finally, we can run the below command to confirm that our new file has been successfully created:

```
ls
```

The **ls** command asks the terminal to *list* the children of the parent directory that we are currently in.

> For more information on terminal commands for managing your directories, check out the [MDN Docs](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line).

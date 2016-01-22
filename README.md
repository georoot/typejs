# typejs

## usage

``` var <ObjName> = new typejs(<Id of element>); ```

This creates an object which makes modifications to the element whose id has been passed as parameter

``` <ObjName>.setSpeed(400); ```

This can be used to set the typing speed of the cursor

``` <ObjName>.flush(); ```

Just a simple call that i added if you want to clear the space that you are using this on. It is recommended to use this always before you use the library

``` <ObjName>.append(text,callbackFunction); ```

This function adds text in typewritten effect to your element and calls the callback function once it is done with the task.

``` <ObjName>.clear(callbackFunction); ```

This function will clear out the entire console space for you. The only difference between this and flush is that this function does the work in a typewritten fashion

``` <ObjName>.delWord(callbackFunction); ```

This function will delete the last word from the content found.


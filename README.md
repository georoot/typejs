# typejs

## usage

[code]var <ObjName> = new typejs(<Id of element>);[/code]

This creates an object which makes modifications to the element whose id has been passed as parameter

[code]<ObjName>.setSpeed(400);[/code]

This can be used to set the typing speed of the cursor

[code]<ObjName>.flush();[/code]

Just a simple call that i added if you want to clear the space that you are using this on. It is recommended to use this always before you use the library

[code]<ObjName>.append(text,callbackFunction);[/code]

This function adds text in typewritten effect to your element and calls the callback function once it is done with the task.

[code]<ObjName>.clear(callbackFunction);[/code]

This function will clear out the entire console space for you. The only difference between this and flush is that this function does the work in a typewritten fashion

[code]<ObjName>.delWord(callbackFunction);[/code]

This function will delete the last word from the content found.


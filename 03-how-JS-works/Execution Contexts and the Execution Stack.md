# Execution Contexts and the Execution Stack

![](Execution%20Contexts%20and%20the%20Execution%20Stack/executionContexts.jpg)

![](Execution%20Contexts%20and%20the%20Execution%20Stack/executionContexts2.jpg)
So for the duration of this **first function** call, the execution context for that function becomes the *active* context in which the code is executed. 
Let’s get inside the first function, this a variable will now get stored in the execution context for this function, and ~NOT~ anymore in the *global context*.
And now we call the **second function**. Again, a new execution context will be created and put **on top** of the execution stack, this is now the *active* context. Variable b is stored in this new execution context.
And now we call the **third function**, and once more, a new execution context is created and put **on top** of the stack. In side the third function we have two variables declarations. This function has now done all its work or we say that the ~function returns~.
It gets **removed** from the top of the **execution stack**…
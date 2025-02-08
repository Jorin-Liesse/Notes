<link rel="stylesheet" href="../style.css">

## C-Sharp Workflow

> ### Namespaces
> For each file, include all the code in a namespace based on the folder structure.
> 
> ```csharp
> namespace Name.SubNamespace 
> {
>     public class Example
>     {
> 
>     }
> }
> ```

<br>


> ### One Class per File
> Ensure that each file contains only one class to maintain clarity and simplicity.
> 
> ```csharp
> public class ExampleClass
> {
>     // Class implementation
> }
> ```

<br>

> ### File Name Same as Class Name
> Name each file the same as the class it contains to make it easier to locate and manage classes.
> 
> ```csharp
> // File: ExampleClass.cs
> public class ExampleClass
> {
>     // Class implementation
> }
> ```

<br>

> ### Regions
> Group each section of code into regions to organize them
> 
> ```csharp
> #region Using Statements
> 
> using UnityEngine;
> 
> #endregion
> 
> public class Example : MonoBehaviour
> {
>     #region Serialize Fields
>     #endregion
> 
>     #region Private Fields
>     #endregion
> 
>     #region Public Properties
>     #endregion
> 
>     #region Unity Methods
>     #endregion
> 
>     #region Private Methods
>     #endregion
> 
>     #region Public Methods
>     #endregion
> }
> ```

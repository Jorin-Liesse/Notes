<link rel="stylesheet" href="../style.css">

## Blender Workflow

### Design/Blockout

> ### Low Poly  
> **Modeling**: Focus on important parts for the silhouette; details to be baked later.  
> **Modifiers**: Use mirror modifier and link objects for identical parts.  
> **Unwrap & Seams**: Mark hard edges as seams, minimize smooth edge seams, Unwrap all objects.  
> **Islands**: Rectify and average island sizes; scale down less important elements.  
> **Materials**: Separate opacity and emission parts into distinct materials; assign faces accordingly.  
> **Packing**: Pack islands per material.  
> **Final Checks**: Mark hard edges as bevel edges, check face orientation, set model dimensions and origin.  
> **Save**: Save in a new folder before proceeding.  
> **Apply Modifiers**: Apply all modifiers, convert curves to mesh, add triangulation modifier.  
> **Baking Groups**: Split model into baking groups, name them (BG1_Low).  
> **Export**: Export to FBX (Low).

<br>

> ### High Poly  
> **Details**: Model floaters and extra details, add bevel modifier.  
> **Baking Groups**: Assign to baking groups, keeping floaters separate.  
> **Naming**: Rename baking groups, name them (BG1_High).  
> **Export**: Export to FBX (High, Floaters).  

<br>

> ### Rigging  
> **Rig Naming**: Name the rig (R_Name).  
> **Bones**: Add and parent bones for necessary movements, constraints, and control bones (Root Bone (0, 0, 0)).  
> **Symmetry & Naming**: Use symmetry in edit mode; name bones systematically (B_Name, B_Name.F.L, etc.).  
> **Parent Mesh & Rig**: Join All part of Low Poly (name SM_Name), Parent Mesh to the Rig.  
> **Vertex Groups**: Uncheck deform for non-vertex assigned bones; assign vertices to corresponding bone names.  
> **Bone Collections**: Create collections for bones and control bones, color-code them.  
> **Final Setup**: Lock transformations, limit IK bone rotation, check collections visibility.  

<br>

> ### Animation  
> **Setup**: Create animations using timeline and graph editor, Toggle shield.  
> **Naming**: Name animations (A_Name).  
> **Nonlinear Animation**: Push down actions in nonlinear animation.  
> **Export**: Select rig, mesh, and push down animations; export settings.  

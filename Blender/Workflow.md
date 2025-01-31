<link rel="stylesheet" href="../style.css">

## Blender Workflow

> ### Design/Blockout
> **Modeling**: Focus on getting the form og the object with primitives.  

<br>

> ### Low Poly  
> **Modeling**: Focus on important parts for the silhouette; details to be baked later.  
> **Modifiers**: Use mirror modifier and link objects for identical parts.  
> **Materials**: Separate opacity and emission parts into distinct materials; assign faces accordingly.  
> **Unwrap & Seams**: Mark Sharp edges as seams, minimize smooth edge seams, Unwrap all objects.  
> **Islands**: Rectify and average island sizes; scale down less important elements.  
> **Packing**: Pack islands per material.  
> **Final Checks**: Mark Sharp edges and bevel Weight, check UV stretch, check face orientation, set model dimensions and origin.  
> **Apply Transform**: Apply All transforms.
> **Save**: Save in a new folder before proceeding.  
> **Apply Modifiers**: Apply all modifiers, convert curves to mesh, add triangulation modifier.  
> **Baking Groups**: Split model into baking groups, name them (BG1_Low).  
> **Export**: Export to FBX (Low).

<br>

> ### High Poly  
> **Details**: Model floaters and extra details, add bevel modifier and Weighted Normals.  
> **Baking Groups**: Assign to baking groups, keeping floaters separate.  
> **Naming**: Rename baking groups, name them (BG1_High).  
> **Export**: Export to FBX (High, Floaters).  

<br>

> ### Rigging  
> **Rig Naming**: Name the rig (R_Name).  
> **Bones**: Add and parent bones for necessary movements, constraints, and control bones (Root Bone (0, 0, 0)).  
> **Symmetry & Naming**: Use symmetry in edit mode; name bones systematically (B_Name, B_Name.F.L, etc.).  
> **Bone Roll**: Select all bone and recalculate Roll.
> **Uncheck deform**: Uncheck deform for non-vertex assigned bones.
> **Parent Mesh & Rig**: Join All part of Low Poly (name SM_Name), Parent Mesh to the Rig.  
> **Vertex Groups**: Assign vertices to corresponding bone names.  
> **Bone Collections**: Create collections for bones and control bones, color-code them.  
> **Final Setup**: Lock transformations, limit IK bone rotation, check collections visibility.  

<br>

> ### Animation  
> **Setup**: Create animations using timeline and graph editor, Toggle shield.  
> **Naming**: Name animations (A_Name).  
> **Nonlinear Animation**: Push down actions in nonlinear animation.  
> **Export**: Select rig, mesh, and push down animations; export settings.  

<br>

> ### Shortcuts
> **Link Object**: (object mode) CTRL+L → link object data or ALT+D
> 
> **Mirror Modifier**: Modifier Tab → add button → mirror
> 
> **Seam edge**: (edit mode) U → Mark seam
> 
> **Unwrap All**: (object mode) A → (edit mode) A  → U → Unwrap
> 
> **Islands Rectify**: TexTools addon Rectify button easy with uv select 
> 
> **Average Island Sizes**: materials tab Select 
> 
> **Sale Islands**: S + number numpad (≈0.75)
> 
> **Packing Islands**: UV button in UV Editor → Pack Islands
> 
> **Face Orientation**: Viewport overlays → Face orientation
> 
> **Stretch**: UV Editor → Overlays → Stretching
> 
> **Change Dimensions**: N → Item → Dimensions
> 
> **Set Origin**: Object → Set Origin → Origin to 3D Cursor
> 
> **Mark Sharp**: Edge → Mark Sharp
> 
> **Bevel Weight**: (object mode) A → Select a Sharp edge → SHIFT G → Sharpness → F3 → Bevel Weight → drag to 1
> 
> **Apply Transform**: (object mode) A → CTRL+A → All Transforms
> 
> **Apply Modifiers**: (object mode) A → CTRL+A → Visual Geometry to Mesh
> 
> **Triangulation Modifier**: Modifier Tab → add button → Triangulate
> 
> **Rename**: F2
> 
> **Export**: File → Export → FBX → Settings
> 
> **Bevel Modifier**: (object mode) A → CTRL+A →  Modifier Tab → add button → Bevel → Settings
> 
> **Weighted Normals Modifier**: (object mode) A → CTRL+A →  Modifier Tab → add button → WeightedNormals
> 
> **Parent**: (object mode) CTRL+P
> 
> **Join**: (object mode) CTRL+J
> 
> **Symmetrize**: (edit mode) Armature → Symmetrize → (B_Name, B_Name.F.L, etc.)
> 
> **Bone Roll**: (edit mode) SHIFT+N → Global +Z Axis
> 
> **Deform**: (edit mode) Bone → Deform → ✅ or ❌
> 
> **Parent Mesh & Rig**: (object mode) Mesh → Rig → CTRL+P → Armature Deform → With Automatic Weights or With Empty Groups
> 
> **Vertex Group**: (object mode) Data Tab → Vertex Groups
> 
> **Bone Collections**: (object mode) Armature Tab → Bone Collections
> 
> **Color Bones**: (pose mode) Bone Tab → Viewport Display → Bone Color → Color
> 
> **Bones In front**: (object mode) Armature Tab → Viewport Display → In Front
> 
> **Bones Shape**: (object mode) Armature Tab → Viewport Display → Display As → Stick
> 
> **Lock Transformations**: (pose mode) Bone Tab → Transform → Lock
> 
> **limit IK**: (pose mode) Bone Tab → Inverse Kinematics → Limit

<br>

> ### Settings
> **Edge**s: ✅  
> **Width Type**: Offset  
> **Amount**: 0.02  
> **Segments**: 2  
> **Limit Method**: Weight  
> **Superellipse**: ✅  
> **Shape**: 1  
> 
> **Selected Objects**: ✅  
> **Apply Scales**: FXB Units Scale  
> **Forward**: Y Forward  
> **Up**: Z Up  
> **Apply Unit**: ✅  
> **Use Space Transform**: ✅  
> **Apply Transfor**: ✅  
> **Animation**: ✅  
> **Bake Animation**: ✅  
> **All Actions**: ❌  
> **NLA Strips**: ✅  
> **Force Start/End Keying**: ✅  

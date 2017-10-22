///pause(type)
with (obj_pause){
type = argument0;
if (type == 0){
instance_deactivate_all(true);
image_index = 1;
paused = 1;
instance_create(view_xview[0]+(view_wview/2), 192, obj_menubutton);
instance_create(view_xview[0]+(view_wview/2), 567, obj_resumebutton);
}
else if (type == 1){
}
else{
return(0);
}
return(1);
}

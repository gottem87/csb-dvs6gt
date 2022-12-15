gdjs.Level_323Code = {};
gdjs.Level_323Code.GDPlayerObjects1= [];
gdjs.Level_323Code.GDPlayerObjects2= [];
gdjs.Level_323Code.GDdead_95sonObjects1= [];
gdjs.Level_323Code.GDdead_95sonObjects2= [];
gdjs.Level_323Code.GDSpikeObjects1= [];
gdjs.Level_323Code.GDSpikeObjects2= [];
gdjs.Level_323Code.GDWinObjects1= [];
gdjs.Level_323Code.GDWinObjects2= [];
gdjs.Level_323Code.GDDeathScreen1Objects1= [];
gdjs.Level_323Code.GDDeathScreen1Objects2= [];
gdjs.Level_323Code.GDWinScreenObjects1= [];
gdjs.Level_323Code.GDWinScreenObjects2= [];
gdjs.Level_323Code.GDTileObjects1= [];
gdjs.Level_323Code.GDTileObjects2= [];
gdjs.Level_323Code.GDHotbarObjects1= [];
gdjs.Level_323Code.GDHotbarObjects2= [];
gdjs.Level_323Code.GDControlsObjects1= [];
gdjs.Level_323Code.GDControlsObjects2= [];

gdjs.Level_323Code.conditionTrue_0 = {val:false};
gdjs.Level_323Code.condition0IsTrue_0 = {val:false};
gdjs.Level_323Code.condition1IsTrue_0 = {val:false};


gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDWinObjects1Objects = Hashtable.newFrom({"Win": gdjs.Level_323Code.GDWinObjects1});
gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_323Code.GDPlayerObjects1});
gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_323Code.GDPlayerObjects1});
gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Level_323Code.GDSpikeObjects1});
gdjs.Level_323Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathScreen1"), gdjs.Level_323Code.GDDeathScreen1Objects1);
gdjs.copyArray(runtimeScene.getObjects("WinScreen"), gdjs.Level_323Code.GDWinScreenObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDDeathScreen1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDDeathScreen1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_323Code.GDWinScreenObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDWinScreenObjects1[i].hide();
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(450);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(250);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.Level_323Code.GDWinObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDWinObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_323Code.GDPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("WinScreen"), gdjs.Level_323Code.GDWinScreenObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDWinScreenObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDWinScreenObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").getJumpSpeed() * (1.5));
}
}}

}


{


gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.Level_323Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").getMaxSpeed() * (1.5));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_323Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_323Code.GDSpikeObjects1);

gdjs.Level_323Code.condition0IsTrue_0.val = false;
{
gdjs.Level_323Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDPlayerObjects1Objects, gdjs.Level_323Code.mapOfGDgdjs_46Level_95323Code_46GDSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_323Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathScreen1"), gdjs.Level_323Code.GDDeathScreen1Objects1);
/* Reuse gdjs.Level_323Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_323Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Level_323Code.GDDeathScreen1Objects1.length ;i < len;++i) {
    gdjs.Level_323Code.GDDeathScreen1Objects1[i].hide(false);
}
}}

}


};

gdjs.Level_323Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_323Code.GDPlayerObjects1.length = 0;
gdjs.Level_323Code.GDPlayerObjects2.length = 0;
gdjs.Level_323Code.GDdead_95sonObjects1.length = 0;
gdjs.Level_323Code.GDdead_95sonObjects2.length = 0;
gdjs.Level_323Code.GDSpikeObjects1.length = 0;
gdjs.Level_323Code.GDSpikeObjects2.length = 0;
gdjs.Level_323Code.GDWinObjects1.length = 0;
gdjs.Level_323Code.GDWinObjects2.length = 0;
gdjs.Level_323Code.GDDeathScreen1Objects1.length = 0;
gdjs.Level_323Code.GDDeathScreen1Objects2.length = 0;
gdjs.Level_323Code.GDWinScreenObjects1.length = 0;
gdjs.Level_323Code.GDWinScreenObjects2.length = 0;
gdjs.Level_323Code.GDTileObjects1.length = 0;
gdjs.Level_323Code.GDTileObjects2.length = 0;
gdjs.Level_323Code.GDHotbarObjects1.length = 0;
gdjs.Level_323Code.GDHotbarObjects2.length = 0;
gdjs.Level_323Code.GDControlsObjects1.length = 0;
gdjs.Level_323Code.GDControlsObjects2.length = 0;

gdjs.Level_323Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_323Code'] = gdjs.Level_323Code;

gdjs.Level_321Code = {};
gdjs.Level_321Code.GDPlayerObjects1= [];
gdjs.Level_321Code.GDPlayerObjects2= [];
gdjs.Level_321Code.GDSpikeObjects1= [];
gdjs.Level_321Code.GDSpikeObjects2= [];
gdjs.Level_321Code.GDTileObjects1= [];
gdjs.Level_321Code.GDTileObjects2= [];
gdjs.Level_321Code.GDDeathScreen1Objects1= [];
gdjs.Level_321Code.GDDeathScreen1Objects2= [];
gdjs.Level_321Code.GDdead_95sonObjects1= [];
gdjs.Level_321Code.GDdead_95sonObjects2= [];
gdjs.Level_321Code.GDWinObjects1= [];
gdjs.Level_321Code.GDWinObjects2= [];
gdjs.Level_321Code.GDWinScreenObjects1= [];
gdjs.Level_321Code.GDWinScreenObjects2= [];
gdjs.Level_321Code.GDWinBoiiObjects1= [];
gdjs.Level_321Code.GDWinBoiiObjects2= [];
gdjs.Level_321Code.GDHotbarObjects1= [];
gdjs.Level_321Code.GDHotbarObjects2= [];
gdjs.Level_321Code.GDControlsObjects1= [];
gdjs.Level_321Code.GDControlsObjects2= [];

gdjs.Level_321Code.conditionTrue_0 = {val:false};
gdjs.Level_321Code.condition0IsTrue_0 = {val:false};
gdjs.Level_321Code.condition1IsTrue_0 = {val:false};


gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSpikeObjects1Objects = Hashtable.newFrom({"Spike": gdjs.Level_321Code.GDSpikeObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDdead_9595sonObjects1Objects = Hashtable.newFrom({"dead_son": gdjs.Level_321Code.GDdead_95sonObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level_321Code.GDPlayerObjects1});
gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWinObjects1Objects = Hashtable.newFrom({"Win": gdjs.Level_321Code.GDWinObjects1});
gdjs.Level_321Code.eventsList0 = function(runtimeScene) {

{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathScreen1"), gdjs.Level_321Code.GDDeathScreen1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_321Code.GDSpikeObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinBoii"), gdjs.Level_321Code.GDWinBoiiObjects1);
gdjs.copyArray(runtimeScene.getObjects("WinScreen"), gdjs.Level_321Code.GDWinScreenObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDDeathScreen1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDeathScreen1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDWinScreenObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDWinScreenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDWinBoiiObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDWinBoiiObjects1[i].stopEmission();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDSpikeObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDSpikeObjects1[i].hide(false);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spike"), gdjs.Level_321Code.GDSpikeObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDSpikeObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("DeathScreen1"), gdjs.Level_321Code.GDDeathScreen1Objects1);
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
gdjs.Level_321Code.GDdead_95sonObjects1.length = 0;

{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDdead_9595sonObjects1Objects, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointX("")) - (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getScaleX()) * 2, (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getPointY("")) - (( gdjs.Level_321Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level_321Code.GDPlayerObjects1[0].getScaleY()) * 2, "");
}{for(var i = 0, len = gdjs.Level_321Code.GDdead_95sonObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDdead_95sonObjects1[i].setAdditiveRendering(true);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDDeathScreen1Objects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDDeathScreen1Objects1[i].hide(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Win"), gdjs.Level_321Code.GDWinObjects1);

gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDPlayerObjects1Objects, gdjs.Level_321Code.mapOfGDgdjs_46Level_95321Code_46GDWinObjects1Objects, false, runtimeScene, false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Level_321Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level 2", false);
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(450);
}
}{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(250);
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "j");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").getJumpSpeed() * (1.5));
}
}}

}


{


gdjs.Level_321Code.condition0IsTrue_0.val = false;
{
gdjs.Level_321Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "k");
}if (gdjs.Level_321Code.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level_321Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level_321Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setMaxSpeed(gdjs.Level_321Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").getMaxSpeed() * (1.5));
}
}}

}


};

gdjs.Level_321Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level_321Code.GDPlayerObjects1.length = 0;
gdjs.Level_321Code.GDPlayerObjects2.length = 0;
gdjs.Level_321Code.GDSpikeObjects1.length = 0;
gdjs.Level_321Code.GDSpikeObjects2.length = 0;
gdjs.Level_321Code.GDTileObjects1.length = 0;
gdjs.Level_321Code.GDTileObjects2.length = 0;
gdjs.Level_321Code.GDDeathScreen1Objects1.length = 0;
gdjs.Level_321Code.GDDeathScreen1Objects2.length = 0;
gdjs.Level_321Code.GDdead_95sonObjects1.length = 0;
gdjs.Level_321Code.GDdead_95sonObjects2.length = 0;
gdjs.Level_321Code.GDWinObjects1.length = 0;
gdjs.Level_321Code.GDWinObjects2.length = 0;
gdjs.Level_321Code.GDWinScreenObjects1.length = 0;
gdjs.Level_321Code.GDWinScreenObjects2.length = 0;
gdjs.Level_321Code.GDWinBoiiObjects1.length = 0;
gdjs.Level_321Code.GDWinBoiiObjects2.length = 0;
gdjs.Level_321Code.GDHotbarObjects1.length = 0;
gdjs.Level_321Code.GDHotbarObjects2.length = 0;
gdjs.Level_321Code.GDControlsObjects1.length = 0;
gdjs.Level_321Code.GDControlsObjects2.length = 0;

gdjs.Level_321Code.eventsList0(runtimeScene);

return;

}

gdjs['Level_321Code'] = gdjs.Level_321Code;

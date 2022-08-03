function setup()

{
myCanvas=CreateCanvas(300 ,  300);
myCanvas.center();
background ("forestgreen");
myCanvas.mousereleased(classifymyCanvas)
}

function  preload()
{
  classifier = ml5.imageClassifier('DoodleNet');  
}
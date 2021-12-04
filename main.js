var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
    fabric.Image.fromURL("BirthdayImage.jpg",function(Img)
    {
        image_object=Img
        image_object.scaleToWidth(2000)

        image_object.scaleToHeight(500)

        image_object.set({
            top:0,
            left:0
            
        })
        canvas.add(image_object)
    }
    ) 
}

function playsound(){
	x.play()
}

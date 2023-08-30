Ans1)If you want two objects with the same elements but in a different order to compare equal, then the obvious thing to do is compare sorted copies of them - for instance, for the dictionaries represented by your JSON strings a and b:

but that doesn't work, because in each case, the "errors" item of the top-level dict is a list with the same elements in a different order, and sorted() doesn't try to sort anything except the "top" level of an iterable.

To fix that, we can define an ordered function which will recursively sort any lists it finds (and convert dictionaries to lists of (key, value) pairs so that they're orderable):
Ans2)<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        //XHTMLHTTPREQUEST:

        // XMLHttpRequest  object
        // new keyword
        // creating an XHR Object
        //request variable => user defined
        var request=new XMLHttpRequest()
        console.log(request)

        // open an connection
        request.open('GET','https://restcountries.com/v3.1/all')

        //sending an connection
        request.send()

        // event and function

        // onload event=> page load 

        request.onload= function(){
            console.log("Page Loaded")
            // console.log(request.response)// string=> object
            var data=JSON.parse(request.response)
            console.log(data)
            //console.log(data[0].area)

            // how to get all areas in console?
            //for loop

            for(var i=0;i<data.length;i++){
                //console.log(data[i])
                //console.log(data[i].region,data[i].area)
            }

            // for of
            for(var obj of data){
             //   console.log(obj.area)
            }

            //for in loop
            for(var index in data){
              //  console.log(index)
                console.log(data[index].area)
            }
        }
        
    </script>
</body>
</html>
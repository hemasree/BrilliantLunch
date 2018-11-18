
$(window).on("load", function () {
    $("li").each(function () {
        var index = $(this).index();
        var val = index * 30 + 'px';
        $(this).css('top', val);
    });

    
})

function plotInCal(events, indexToPlot) {

    $('#innerDiv22').empty();
    $('#innerDiv22').append('<div id="me"><span>Me</span></div>');
    $('#me').css({
        'position': 'relative',
        'top': (events[0]['start']) + 'px',
        'width': '100%',
        'border': '1px solid #ccc',
        'background-color': 'white',
        'text-align': 'center',
        'float': 'left',
        'height': '60px'
    })

    
    for (var e = 1; e < events.length; e++) {
        $('#innerDiv22').append('<div id=' + "brLun" + e + '>Brilliant Lunch</div>');
        $('#brLun' + e).css({
            'position': 'relative',
            'top': (events[e]['start']) + 'px',
            'width': '100%',
            'border': '1px solid #ccc',
            'background-color': 'white',
            'text-align': 'center',
            'float': 'left',
            'height': '60px',
            'border-left': '3px solid #0081ff'
        })
    }

    if(indexToPlot<0){
        $('#me').css({
            'border-left': '3px solid black'
        })
    }else{
        $('#me, #brLun' + indexToPlot).css({
            'border-left': '3px solid green'
        })
    }

}


function matchLunchEvent(arr){
    
    var highest=31;
    var highIndex = [];
    var valuetoSend;
    for(var i=1, len=arr.length; i<len;i++){
        var diff= Math.abs(arr[i]['start']-arr[0]['start']);
        if(diff <= 30){
            if(diff<highest){
                highest=diff;
                highIndex=[];
                highIndex[0]=i;
            }else if(diff==highest){
                highest=diff;
                highIndex.push(i);
            }
            
        }
    }
    if(highIndex.length>1){
        
        var len=highIndex.length;
        var index = highIndex[0];
        var value = arr[highIndex[0]]['start'];
        for (var i = 1; i < len; i++) {
          if (arr[highIndex[i]]['start'] < value) {
            value = arr[highIndex[i]]['start'];
            index = highIndex[i];
          }
        }
        valuetoSend=index;
    }else if(highIndex.length==1){
        valuetoSend= highIndex;
    }else{
        valuetoSend=-1;
    }

    plotInCal(arr, valuetoSend);
    
}
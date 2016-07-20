// @elem:node
// @prop:string, elem's property
// @stepVal: num
// @finalVal: num, elem's final position
// @duration: num, time duration of the animation
function myAnimate(elem, prop, stepVal, finalVal, duration){
    //initial val of the property
    var currentVal = elem[prop]; 
    //reversed?
    var reversed = finalVal < currentVal?true:false; 
    //calculate how many steps needed to completed the action
    var steps = (Math.abs(finalVal - currentVal))/stepVal; 
    //calculate the duration of each step
    var stepDuration = duration/steps; 
    //execute, add or subtract according to the status of `reversed`
    if(reversed){
        setTimeout(function(){
            currentVal -= stepVal; 
            elem[prop] = currentVal; 
            //if finalVal is not acquired then do it again recursively
            if(currentVal>finalVal){
                setTimeout(arguments.callee, stepDuration); 
            }; 
        }, stepDuration);
    }else{
        setTimeout(function(){
            currentVal += stepVal; 
            elem[prop] = currentVal; 
            if(currentVal<finalVal){
                setTimeout(arguments.callee, stepDuration); 
            }; 
        }, stepDuration);
    }; 
    return elem; 
}

// test
// myAnimate(document.getElementsByClassName('wrapper')[0], 'scrollTop', 20, innerHeight*0, 500);
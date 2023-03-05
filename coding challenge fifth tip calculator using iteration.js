var johnFamilytrip =  {
    tips : [124, 48, 268, 180, 42 ],
    tipsamount: [],
    finalbillpaid: [],
    tipCalc: function(){
        for ( var i = 0; i < this.tips.length; i++) 
        {
            var bill = this.tips[i];
            var  percentage;
            if (bill < 50)
     {
        percentage = 0.2;
    } 
    else if (bill >= 50 && bill < 200)
     {
        percentage = 0.15;
    }
    else
     {
        percentage = 0.10;
    }
    this.tipsamount[i] = bill * percentage;
    this.finalbillpaid[i] = bill + (bill * percentage);
        }
    }   
}
johnFamilytrip.tipCalc();
var markFamilytrip =  {
    tipsmark : [77, 375, 110, 42 ],
    tipsamountmark: [],
    finalbillpaidmark: [],
    tipCalcmark: function(){
        for ( var g = 0; g < this.tipsmark.length; g++) 
        {
            var billmark = this.tipsmark[g];
            var  percentagemark;
            if (billmark < 100)
     {
        percentagemark = 0.2;
    } 
    else if (billmark >= 100 && billmark < 300)
     {
        percentagemark = 0.10;
    }
    else
     {
        percentagemark = 0.25;
    }
    this.tipsamountmark[g] = billmark * percentagemark;
    this.finalbillpaidmark[g] = billmark + (billmark * percentagemark);
        }
        
    }   
}
function tipsaverage(tips)
{
    var sum = 0;
    for (var index = 0; index < tips.length; index++) {
        sum =  tips[index] + sum;
    }
    return sum / tips.length;
}
markFamilytrip.tipCalcmark();
johnFamilytrip.average = tipsaverage(johnFamilytrip.tipsamount);
markFamilytrip.average = tipsaverage(markFamilytrip.tipsamountmark);
console.log(johnFamilytrip, markFamilytrip);

var Student = Class({
    initialize: function (fname, lname, age, isFromKarmiel, callback) {
        this.FirstName = fname;    
        this.LastName = lname;  
        this.Age = age;      
        this.IsFromKarmiel = isFromKarmiel;
        this.Bac = {
            FirstName: fname,
            LastName: lname,
            Age: age,
            IsFromKarmiel: isFromKarmiel
        }
        this.Callback = callback;
    },
    GetValue: function (prop) {
        return this[prop];
    },
    SetValue: function (prop,val) { 
        this[prop] = val;
        eval(this.Callback + "('" + prop + "'," + val + ")");
    },
    // reset from bac
    Reset: function () {
        this.FirstName = this.Bac.FirstName;
        this.LastName = this.Bac.LastName;
        this.Age = this.Bac.Age;
        this.IsFromKarmiel = this.Bac.IsFromKarmiel;
    },
    ToHTMLString: function(){
        var s = "";
        var ar = ["FirstName","LastName","Age","IsFromKarmiel"];
        for (var i=0;i<ar.length;i++) {
            s += "<div><label>" + ar[i] + "</label><span>" + student[ar[i]] + "</span></div>";
        }
        return s;
    }
});
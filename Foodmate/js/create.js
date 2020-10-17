/*Create Event*/
function CreateOneEvent() {

    x = document.getElementById("FoodCategory");
    var i = x.selectedIndex;
    var FoodCategory = x.options[i].text;
    x = document.getElementById("EventName");
    var EventName = x.value;
    x = document.getElementById("EventDate");
    var EventDate = x.value;
    x = document.getElementById("Member");
    var Member = x.value;
    x = document.getElementById("Description");
    var Description = x.value;
    x = document.getElementById("Location");
    var Location = x.value;
    alert(FoodCategory + "," + EventName + "," + EventDate + "," + Member + "," + Description + "," + Location);
    AddData(FoodCategory, EventName, EventDate, Member, Description, Location)
}

/*Send Data to Firebase*/
function AddData(P1, P2, P3, P4, P5, P6) {
    var User = "Paul";
    //alert("AAA");
    //var User = firebase.auth().currentUser;
    //alert("Test"+User);
    var K = P2 + " " + P3;
    var ref = db.collection('Foodmate').doc(K);
    ref.set({
        FoodCategory: P1, EventName: P2, EventDate: P3, Member: P4, Description: P5, Location: P6
    }).then(() => {
        alert('新增成功');
    });
}



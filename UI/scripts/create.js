// Called When New Party is Created
function createNewParty() {
    if (window.confirm("Create New Political Party")) {
        success();
    }
}

// Called when new office is created
function createOffice() {
    if (window.confirm("Confirm New Office")) {
        success();
    }
}
// Success Alert
function success() {
    window.alert("Success");
}
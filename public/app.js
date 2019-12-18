(()=>{let thisId = ""
$(".addNote").click(function(){
    thisId = this.id
    console.log(this);
});

$("#newNote").on("hide.bs.modal", () => {
    // $.post("/api/saveNote", {note: $("#articleNote").val()})
  $.ajax({
    type: "POST",
    url: "/api/saveNote/" + thisId,
    data: {note: $("#articleNote").val()}
  })
})
})();

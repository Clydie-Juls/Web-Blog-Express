$("#image").change(function (e) {
  const fileName = $(this).val().split("\\").pop();
  $(".file-name").text(fileName);
});

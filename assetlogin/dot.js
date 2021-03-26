angular.module("AdminLogin", []).controller("LoginAdmin", function ($scope) {
  $scope.login = function () {
    if (
      ($scope.username === "admin" && $scope.password === "admin") ||
      ($scope.username === "herwin" && $scope.password === "123") ||
      ($scope.username === "inal" && $scope.password === "456") ||
      ($scope.username === "trisno" && $scope.password === "789") ||
      ($scope.username === "ozan" && $scope.password === "101112")
    ) {
      $scope.login1 = "Anda berhasil login...";
      Swal.fire("Selamat Datang " + $scope.username, "RAT Koperasi Online 2021", "success");
      setTimeout("location.href='dashboard.html'", 2000);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops ...",
        text: "Maaf anda tidak terdaftar !",
        footer: "<a href>Harap menghubungi panitia, Terima Kasih</a>",
      });
    }
    $scope.name = $scope.username;
    $scope.pass = $scope.password;
  };
});

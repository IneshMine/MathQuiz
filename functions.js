function addUser()
{
    player1_name = document.getElementById("player1name").value;
    player2_name = document.getElementById("player2name").value;
       
        localStorage.setItem("player1name" , player1_name);
        localStorage.setItem("player2name" , player2_name);

        window.location =  "index.html"
}
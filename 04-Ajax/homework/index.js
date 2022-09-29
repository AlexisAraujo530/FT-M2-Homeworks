var URL = 'http://localhost:5000/amigos';
let verAmigos = function () {
    $('#lista').empty();
    $.get(URL, function (friends) {
        console.log(friends);
        friends.forEach(e => {
            $('#lista').append(`<li>${e.name}</li>`);
        });
    });
};
$('#boton').click(verAmigos);

let buscarAmigo = function () {
    let input = $('#input').val();
    $.get(URL + '/' + input, function (friend) {
        console.log(friend);
        $('#amigo').append(`<li>${friend.name}</li><li>${friend.email}</li>`);
    input = $('#input').val('');
    });
};

$('#search').click(buscarAmigo);

let deleteAmigo = function () {
    let input = $('#inputDelete').val();
    $.ajax({
        url: URL + '/' + input,
        type: 'DELETE',
        success: function () {
            $('#success').append(`<li>Amigo eliminado </li>`);
        }
    });
    input = $('#inputDelete').val('');
};

$('#delete').click(deleteAmigo);
$('form').on('submit', function(e) {
    e.preventDefault();
    const tarefainput = $('#tarefa').val();
    const novoItem = $('<li>' + tarefainput + '</li>');
    $(novoItem).appendTo('ul');
    $('#tarefa').val('');

})

$('ul').on('click', 'li', function() {
    $(this).toggleClass('done');
  });
$(function() {
  $('#cardlist').empty();
  let template = Handlebars.compile($('#card_template').html());
  cardlist.forEach((card) => {
    let el = template(card);
    $('#cardlist').append(el);
  });
})

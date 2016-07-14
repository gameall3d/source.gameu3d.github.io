var priority = 1;
var tagMath = /(\s*)(`{3,}) *math *\n([\s\S]+?)\s*\2(\n+|$)/g;

function tagMathCodeBlock(data) {

  data.content = data.content.replace(tagMath, function() {
    var start = arguments[1];
    var end = arguments[4];
    var content = '{% math %}' + arguments[3] + '{% endmath %}';

    return start + '<escape>' + content + '</escape>' + (end ? '\n\n' : '');
  });
}

hexo.extend.filter.register('before_post_render', tagMathCodeBlock, priority);
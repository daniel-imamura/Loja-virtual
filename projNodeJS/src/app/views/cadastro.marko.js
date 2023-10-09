// Compiled using marko@4.23.9 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/projnodejs$1.0.0/src/app/views/cadastro.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><title>Cadastro</title><link rel=stylesheet href=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css integrity=sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO crossorigin=anonymous><link rel=stylesheet href=https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css><link rel=stylesheet type=text/css href=/caminho/css/estilo.css></head><body><nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><i class=navbar-brand>Loja Virtual</i><a class=\"btn btn-info\" id=btnLogar href=/login>Logar</a> </nav><form action=/cadastraUsuario method=post id=formulario><h1>Cadastro</h1><div class=box id=boxCadastro><table class=table-mm><tr><td><label for=nome>Nome:</label></td><td><input type=text size=40 id=nome name=nome class=form-control placeholder=\"Nome completo\"></td></tr><tr><td><label for=email>Email:</label></td><td><input type=email size=40 id=email name=email class=form-control placeholder=nome@exemplo.com></td></tr><tr><td><label for=cpf>CPF:</label></td><td><input type=text size=40 id=cpf name=cpf onkeypress=\"$(this).mask('000.000.000-00');\" class=form-control placeholder=\"Ex.: 000.000.000-00\"></td></tr><tr><td><label for=senha>Senha:</label></td><td><input type=password size=40 id=senha name=senha class=form-control></td> </tr></table><input type=submit value=Cadastrar class=\"btn btn-dark\" id=btnCadastro></div></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "35");

  _preferred_script_location_tag({}, out);

  out.w("</body><script src=https://code.jquery.com/jquery-3.3.1.slim.min.js integrity=sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo crossorigin=anonymous></script><script src=https://cdnjs.cloudflare.com/ajax/libs/jquery.mask/1.14.15/jquery.mask.min.js></script><script src=https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js integrity=sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49 crossorigin=anonymous></script><script src=https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js integrity=sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy crossorigin=anonymous></script><script type=text/javascript src=/caminho/javascript/cadastro.js></script></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/projnodejs$1.0.0/src/app/views/cadastro.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };

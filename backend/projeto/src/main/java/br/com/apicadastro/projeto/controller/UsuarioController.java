package br.com.apicadastro.projeto.controller;

import br.com.apicadastro.projeto.model.Usuario;
import br.com.apicadastro.projeto.service.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping("/listar")
    public List<Usuario> getAll() {
        return usuarioService.getAll();
    }

    @PostMapping
    @RequestMapping("/cadastrar")
    public Usuario save(@RequestBody  Usuario usuario){
        return usuarioService.save(usuario);
    }
}

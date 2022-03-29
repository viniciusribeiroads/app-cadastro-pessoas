package br.com.apicadastro.projeto.repository;

import br.com.apicadastro.projeto.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Long> {


}

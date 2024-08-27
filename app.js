function borrarTexto() {
	document.getElementById('textoUsuario').value = '';
}

function encriptar(){
    let textoDeUsuarioParaEncriptar = document.getElementById('textoUsuario').value.trim();
    
    if (textoDeUsuarioParaEncriptar === '') {
        alert("Ingrese un texto.");
        return;
    }
    
    if (/[^a-z\s]/.test(textoDeUsuarioParaEncriptar)) {
        alert("Solo letras minúsculas y sin acentos");
        return;
    }

    let textoDeUsuarioEncriptado = textoDeUsuarioParaEncriptar
        .replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');

    document.getElementById('textoEncriptado').value = textoDeUsuarioEncriptado;
    document.getElementById('textoUsuario').value = '';

    document.getElementById('textoEncriptado').removeAttribute("hidden");
    document.getElementById('desencriptarImagen').style.display = "none";
    document.getElementById('desencriptarTexto').removeAttribute("disabled");
    document.getElementById('copiarTexto').removeAttribute("disabled");

    return;
}

function desencriptar(){
	let textoEncriptado = document.getElementById('textoEncriptado').value;
	let textoDesencriptado;

	textoDesencriptado = textoEncriptado
		.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u').replace(/ai/g, 'a');

	document.getElementById('textoUsuario').value = textoDesencriptado;

	document.getElementById('textoEncriptado').value = '';
	document.getElementById('desencriptarTexto').setAttribute("disabled", "true");
	document.getElementById('copiarTexto').setAttribute("disabled", "true");

	return;
}

borrarTexto();

function copiar() {
    const textoEncriptado = document.getElementById('textoEncriptado').value;
    navigator.clipboard.writeText(textoEncriptado).catch(() => {});
}



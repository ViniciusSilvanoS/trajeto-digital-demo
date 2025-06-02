import React from 'react'

const TermosDeUso = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 text-white">
      <div className="w-full max-w-4xl text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Termos de Uso – Trajeto Digital</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Aceitação dos Termos</h2>
          <p className="text-[#C7CCD4]">
            Ao acessar e utilizar o site trajetodigital.com.br, você concorda com os presentes Termos de Uso. Caso não concorde com algum dos termos, recomendamos que não utilize o site.
          </p>

          <h2 className="text-2xl font-semibold">2. Uso do Site</h2>
          <p className="text-[#C7CCD4]">
            O usuário compromete-se a utilizar o site de forma lícita, respeitando a legislação vigente e os direitos de terceiros. É proibido:
          </p>
          <ul className="list-disc list-inside text-[#C7CCD4]">
            <li>Utilizar o site para fins ilegais ou não autorizados;</li>
            <li>Violar direitos de propriedade intelectual;</li>
            <li>Distribuir vírus ou qualquer outro código de natureza destrutiva.</li>
          </ul>

          <h2 className="text-2xl font-semibold">3. Propriedade Intelectual</h2>
          <p className="text-[#C7CCD4]">
            Todo o conteúdo presente no site, incluindo textos, imagens, logotipos e gráficos, é de propriedade do Trajeto Digital ou de terceiros que autorizaram seu uso. É proibida a reprodução, distribuição ou modificação sem autorização prévia.
          </p>

          <h2 className="text-2xl font-semibold">4. Modificações nos Termos</h2>
          <p className="text-[#C7CCD4]">
            O Trajeto Digital reserva-se o direito de modificar estes Termos de Uso a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação no site.
          </p>

          <h2 className="text-2xl font-semibold">5. Limitação de Responsabilidade</h2>
          <p className="text-[#C7CCD4]">
            O Trajeto Digital não se responsabiliza por danos diretos ou indiretos decorrentes do uso ou da incapacidade de uso do site.
          </p>

          <h2 className="text-2xl font-semibold">6. Legislação Aplicável</h2>
          <p className="text-[#C7CCD4]">
            Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Quaisquer disputas serão resolvidas no foro da comarca de Porto Alegre, RS.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermosDeUso

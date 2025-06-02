import React from 'react'

const PoliticaPrivacidade = () => {
  return (
    <div className="bg-[#0F172A] min-h-screen w-full flex flex-col items-center justify-center px-4 py-24 text-white">
      <div className="w-full max-w-4xl text-left space-y-6">
        <h1 className="text-3xl md:text-5xl font-bold text-center">Política de Privacidade – Trajeto Digital</h1>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Coleta de Dados</h2>
          <p className="text-[#C7CCD4]">
            Coletamos informações fornecidas diretamente por você, como nome, e-mail e telefone, ao preencher formulários no site. Também coletamos dados automaticamente, como endereço IP, tipo de navegador e páginas acessadas, por meio de cookies.
          </p>

          <h2 className="text-2xl font-semibold">2. Uso dos Dados</h2>
          <p className="text-[#C7CCD4]">
            As informações coletadas são utilizadas para:
          </p>
          <ul className="list-disc list-inside text-[#C7CCD4]">
            <li>Aprimorar continuamente a experiência do usuário, personalizando conteúdos e funcionalidades de acordo com suas preferências e interações;</li>
            <li>Facilitar a comunicação com os usuários, incluindo o envio de informações relevantes, atualizações e conteúdos que possam ser de seu interesse;</li>
            <li>Analisar o desempenho e a utilização do site, visando otimizar nossos serviços e oferecer soluções mais alinhadas às necessidades dos usuários.</li>
          </ul>
          <p className="text-[#C7CCD4]">
            Essas atividades podem incluir o envio de mensagens informativas, atualizações, ofertas especiais e conteúdos promocionais relacionados aos serviços e produtos oferecidos pela Trajeto Digital.
          </p>

          <h2 className="text-2xl font-semibold">3. Compartilhamento de Dados</h2>
          <p className="text-[#C7CCD4]">
            Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para cumprir obrigações legais ou mediante seu consentimento.
          </p>

          <h2 className="text-2xl font-semibold">4. Segurança dos Dados</h2>
          <p className="text-[#C7CCD4]">
            Adotamos medidas de segurança para proteger suas informações contra acessos não autorizados, alterações ou destruição.
          </p>

          <h2 className="text-2xl font-semibold">5. Direitos do Usuário</h2>
          <p className="text-[#C7CCD4]">
            Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Para exercer esses direitos, entre em contato conosco através do e-mail: contato@trajetodigital.com.br.
          </p>

          <h2 className="text-2xl font-semibold">6. Alterações na Política de Privacidade</h2>
          <p className="text-[#C7CCD4]">
            Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você a revise regularmente para estar ciente de quaisquer alterações.
          </p>

          <h2 className="text-2xl font-semibold">7. Contato</h2>
          <p className="text-[#C7CCD4]">
            Para dúvidas ou solicitações relacionadas à privacidade, entre em contato conosco pelo e-mail: contato@trajetodigital.com.br.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PoliticaPrivacidade

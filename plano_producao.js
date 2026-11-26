<meta charset="utf-8"/>

<link rel="stylesheet" href="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/css/bootstrap.min.css"/>
<link rel="stylesheet" href="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/css/font-awesome.min.css"/>
<link rel="stylesheet" href="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/css/fullcalendar.min.css" />
<link rel="stylesheet" href="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/css/fullcalendar.print.css" media="print"/>

<script type="text/javascript" src="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/js/jquery-1.9.1.js"></script>
<script type="text/javascript" src="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/js/moment.min.js"></script>
<script type="text/javascript" src="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/js/fullcalendar.min.js"></script>
<script type="text/javascript" src="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/js/pt.js"></script>
<script type="text/javascript" src="https://pt.sps.automotive.local/departments/logistica/SiteAssets/data_CargaDescarga/js/bootstrap.min.js"></script>

<style type="text/css">
    /* 1. Ocultar APENAS o Breadcrumb (Caminho) */
    #ctl00_PlaceHolderTitleBreadcrumb,
    #s4-breadcrumb,
    #s4-breadcrumbRootNode,
    span[id*="PlaceHolderTitleBreadcrumb"],
    .ms-breadcrumb-top,
    .ms-breadcrumb-box,
    .ms-breadcrumbDropdownMenu,
    #DeltaTopNavigation .ms-breadcrumb {
        display: none !important;
    }

    /* 2. Ocultar a Barra de Pesquisa do SharePoint */
    #DeltaPlaceHolderSearchArea,
    #searchInputBox,
    .ms-mpSearchBox,
    #ctl00_PlaceHolderSearchArea {
        display: none !important;
    }

    /* 3. Ocultar apenas o TEXTO do título nativo do SharePoint (usamos agora o nosso próprio
          título, mais abaixo). Importante: NÃO escondemos o contentor/linha à volta (ex:
          #s4-titlerow, .ms-titleArea), porque esse contentor também tem o logótipo da barra
          lateral — escondê-lo apagava o logo também. */
    #DeltaPlaceHolderPageTitleInTitleArea,
    #ctl00_PlaceHolderPageTitleInTitleArea_TitleText,
    .ms-core-pageTitle,
    #pageTitle {
        display: none !important;
        height: 0 !important;
        min-height: 0 !important;
        padding: 0 !important;
        margin: 0 !important;
    }

    /* Reserva de espaço que sobra mesmo depois de colapsar os elementos acima (ex: padding
       fixo do contentor de conteúdo do SharePoint). Ajusta este valor (mais negativo = sobe
       mais) se ainda sobrar espaço em branco. */
    .main { margin-top: -110px !important; }

    .calendar-button { margin-bottom: 5px; margin-right: 4px; min-width: 90px; font-weight: bold; }

    .infowise-icon { width: 11px; height: 11px; display: inline-block; vertical-align: middle; flex-shrink: 0; }

    /* ===== CARTÕES DOS REGISTOS (iguais em todas as áreas) =====
       Fundo branco + faixa lateral com a cor do Status. Os !important são necessários para
       sobrepor os estilos base do FullCalendar (.fc-event) nas áreas OPA/OPT. */
    .pp-card { position: relative; display: block; background-color: #fff !important; color: #1a1a1a !important;
               border: 1px solid #e2e8f0 !important; border-left: 5px solid #b5b5b5 !important; border-radius: 6px !important;
               padding: 7px 8px 6px !important; margin: 0 0 6px 0 !important; box-shadow: 0 1px 3px rgba(0,0,0,0.08);
               cursor: pointer; text-align: left; font-size: 12px !important; line-height: 1.25 !important; text-decoration: none !important;
               white-space: normal; transition: box-shadow 0.15s; }
    .pp-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,0.18); color: #1a1a1a !important; }
    #calendarsContainer .fc-day-grid-event.pp-card { margin: 4px 5px 4px 5px !important; }
    .pp-card { text-align: center !important; }
    .pp-top { position: relative; display: block; text-align: center; padding: 0 2px; min-height: 18px; }
    .pp-top.com-icone { padding-left: 20px; }
    .pp-top .pp-icone-ensaio { position: absolute; top: 2px; left: -2px; font-size: 14px; color: #1d4ea8; }
    /* Prioridade como "badge" pousado no rebordo de cima do cartão: não ocupa a linha do KA */
    .pp-top .pp-prio { position: absolute; top: -25px; right: 2px; margin-left: 0; border: 2px solid #fff; box-sizing: content-box; z-index: 2; }
    .pp-card.com-prio { padding-top: 13px !important; margin-top: 12px !important; }
    #calendarsContainer .fc-day-grid-event.pp-card.com-prio { margin-top: 13px !important; }
    /* KA sempre numa linha; se não couber, ajustarKA() reduz o tamanho da letra */
    .pp-ka { font-size: 13px; font-weight: 700; letter-spacing: 0.2px; white-space: nowrap; overflow: hidden; }
    .pp-continua { color: #333; font-size: 11px; margin-right: 5px; }
    .pp-prio { flex: none; margin-left: 6px; min-width: 20px; height: 20px; border-radius: 10px; background-color: #1f2937; color: #fff; font-size: 11px; font-weight: 700; text-align: center; line-height: 20px; padding: 0 5px; }
    .pp-status { display: inline-flex; align-items: center; margin-top: 5px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.4px; padding: 2px 7px 2px 6px; border-radius: 10px; background-color: #f0f0f0; color: #555; }
    .pp-status i { width: 8px; height: 8px; border-radius: 50%; display: inline-block; margin-right: 5px; background-color: #9a9a9a; }
    .pp-tag-ensaio { display: inline-flex; align-items: center; margin-top: 5px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.4px; padding: 2px 7px; border-radius: 10px; background-color: #e8f0fd; color: #1d4ea8; }
    .pp-tag-ensaio .fa { margin-right: 4px; }
    .pp-chips { display: flex; flex-wrap: wrap; justify-content: center; margin-top: 6px; padding-top: 6px; border-top: 1px solid rgba(0,0,0,0.08); }
    .pp-chip { display: inline-flex; align-items: center; font-size: 10px; font-weight: 700; padding: 2px 6px; border-radius: 4px; margin: 0 4px 4px 0; white-space: nowrap; }
    .pp-chip .fa { margin-right: 4px; font-size: 10px; }
    /* Etiquetas de validação em branco com contorno colorido, para se lerem sobre o fundo do cartão */
    /* Validações em cor sólida (contorno branco para se destacarem sobre o fundo do cartão) */
    .pp-chip.ok   { background-color: #1fa84a; color: #fff; box-shadow: 0 0 0 1px #fff; }
    .pp-chip.nok  { background-color: #e02424; color: #fff; box-shadow: 0 0 0 1px #fff; }
    .pp-chip.pend { background-color: #ffd54a; color: #4a3a00; box-shadow: 0 0 0 1px #fff; }
    .pp-chip.na   { background-color: #fff; color: #6b7280; box-shadow: inset 0 0 0 1px #c9ced6; }
    .pp-metrics { margin-top: 2px; font-size: 11px; color: #222; font-weight: 600; }
    .pp-metrics b { color: #000; }

    /* Cores por Status (faixa lateral + rótulo) — aplicadas a cartões e legenda */
    .st-planeado     { border-left-color: #7a7a7a !important; }
    .st-planeado .pp-status     { color: #444; }     .st-planeado .pp-status i     { background-color: #7a7a7a; }
    .st-preparada    { border-left-color: #f26b0f !important; }
    .st-preparada .pp-status    { color: #a3420a; }  .st-preparada .pp-status i    { background-color: #f26b0f; }
    .st-emcurso      { border-left-color: #e6b800 !important; }
    .st-emcurso .pp-status      { color: #6b5300; }  .st-emcurso .pp-status i      { background-color: #e6b800; }
    .st-produzido    { border-left-color: #1f9e1f !important; }
    .st-produzido .pp-status    { color: #176e17; }  .st-produzido .pp-status i    { background-color: #1f9e1f; }
    .st-interrompido { border-left-color: #d90000 !important; }
    .st-interrompido .pp-status { color: #b00000; }  .st-interrompido .pp-status i { background-color: #d90000; }
    .st-ensaio       { border-left-color: #3b78e7 !important; }
    /* Fundo suave na cor do Status (cartões e legenda) */
    .pp-card.st-planeado,     .legend-card.st-planeado     { background-color: #d2d2d2 !important; }
    .pp-card.st-preparada,    .legend-card.st-preparada    { background-color: #ffb073 !important; }
    .pp-card.st-emcurso,      .legend-card.st-emcurso      { background-color: #ffe04d !important; }
    .pp-card.st-produzido,    .legend-card.st-produzido    { background-color: #8fdc6e !important; }
    .pp-card.st-interrompido, .legend-card.st-interrompido { background-color: #ff8080 !important; }
    .pp-card.st-ensaio,       .legend-card.st-ensaio       { background-color: #a9c7f7 !important; }
    .pp-card { border-top-color: rgba(0,0,0,0.10) !important; border-right-color: rgba(0,0,0,0.10) !important; border-bottom-color: rgba(0,0,0,0.10) !important; }
    /* Rótulos (status / ensaio) em branco por cima do fundo colorido */
    .pp-card .pp-status, .legend-card .pp-status,
    .pp-card .pp-tag-ensaio, .legend-card .pp-tag-ensaio { background-color: #fff !important; }

    /* Legenda no mesmo formato dos cartões */
    .legend-sec { font-size: 11px; font-weight: bold; color: #555; margin: 0 0 6px 0; }
    .legend-sec.sep { margin-top: 14px; padding-top: 10px; border-top: 1px solid #edf2f7; }
    .legend-card { background-color: #fff; border: 1px solid #e2e8f0; border-left: 5px solid #b5b5b5; border-radius: 6px; padding: 5px 8px 6px; margin-bottom: 6px; }
    .legend-card .pp-status, .legend-card .pp-tag-ensaio { margin-top: 0; }
    .legend-chips .pp-chip { display: flex; margin: 0 0 5px 0; font-size: 11px; padding: 4px 8px; }
    .legend-prio { display: flex; align-items: center; background-color: #fff; border: 1px solid #e2e8f0; border-radius: 6px; padding: 6px 8px; font-size: 11px; font-weight: 600; color: #333; line-height: 1.3; }
    .legend-prio .pp-prio { margin: 0 8px 0 0; }
    .legend-prio small { font-weight: 600; color: #777; }

    .legend-panel { background-color: #fcfcfc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 12px; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .legend-header { font-size: 14px; font-weight: 700; color: #2d3748; padding-bottom: 8px; margin-bottom: 12px; border-bottom: 2px solid #edf2f7; text-transform: uppercase; letter-spacing: 0.5px; }
    .legend-row { display: flex; align-items: center; width: 100%; padding: 8px 12px; margin-bottom: 6px; border-radius: 4px; font-size: 11px; font-weight: bold; color: #000; box-shadow: inset 0 -1px 0 rgba(0,0,0,0.1); }
    .legend-row i { margin-right: 8px; font-size: 13px; width: 14px; text-align: center; }
    .legend-row small { font-weight: 600; margin-left: auto; color: #333; }
    .legend-row-status { display: flex; align-items: center; width: 100%; padding: 6px 10px; margin-bottom: 4px; border-radius: 4px; font-size: 11px; font-weight: 600; color: #333; background-color: #fff; border: 1px solid #e2e8f0; }
    .legend-row-status img { margin-right: 10px; width: 13px; height: 13px; }

    .bg-planeado { background-color: #b5b5b5; color: #000; }
    .bg-preparada { background-color: #f58231; color: #fff; }
    .bg-emcurso { background-color: #ffe119; color: #000; }
    .bg-produzido { background-color: #33CC00; color: #fff; }
    .bg-interrompido { background-color: #ff0000; color: #fff; }
    .bg-ensaio { background-color: #8bb3f2; color: #000; }

    .modal-section-title { font-size: 12px; font-weight: bold; color: #0056b3; text-transform: uppercase; border-bottom: 1px dashed #ddd; padding-bottom: 3px; margin-top: 0 !important; margin-bottom: 8px; width: 100%; }
    .modal-metadata-label { font-weight: bold; color: #444; font-size: 12px; margin-bottom: 4px; padding-right: 0; text-overflow: ellipsis; overflow: hidden; white-space: nowrap; }
    .modal-metadata-value { color: #000; font-size: 12px; margin-bottom: 8px; font-weight: 600; padding-left: 5px; }
    .cc-title { font-size: 1.1rem; font-weight: bold; color: #333; margin-right: 15px; white-space: nowrap; }


    .area-button { margin-bottom: 5px; margin-right: 4px; min-width: 90px; font-weight: bold; }

    /* ===== Barra de ferramentas COMUM a todos os calendários ===== */
    .cal-toolbar { display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px; flex-wrap: wrap; }
    .cal-toolbar-lado { display: flex; align-items: center; flex: 1 1 0; }
    .cal-toolbar-dir { justify-content: flex-end; }
    .cal-toolbar .btn { font-weight: bold; }
    .cal-titulo { font-size: 20px; font-weight: bold; color: #222; text-align: center; white-space: nowrap; padding: 0 12px; }
    .cal-contagem { font-size: 12px; color: #666; white-space: nowrap; }

    /* ===== Gráfico Planeado vs Produzido (por baixo do calendário) =====
       O gráfico e a tabela ocupam a largura toda (sem margens laterais) para as colunas dos
       dias ficarem alinhadas com as do calendário, que são medidas no ecrã. */
    .gk { margin-top: 18px; border-top: 2px solid #d9d8d2; padding: 12px 0 8px; background: #fff; }
    .gk-cab { display: flex; justify-content: space-between; align-items: flex-start; gap: 16px; flex-wrap: wrap; }
    .gk-titulo { font-size: 16px; font-weight: 700; color: #222; }
    .gk-sub { font-size: 12px; color: #666; margin: 2px 0 8px; }
    .gk-chips { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }
    .gk-chip { border: 1px solid #c9ced6; border-radius: 14px; padding: 3px 11px; font-size: 12.5px; font-weight: 700; color: #52514e; background: #fff; cursor: pointer; }
    .gk-chip:hover { border-color: #6c757d; }
    .gk-chip.on { background: #6c757d; border-color: #6c757d; color: #fff; }
    .gk-graf { position: relative; }
    .gk-graf svg { display: block; overflow: visible; }
    .gk-dica { position: absolute; pointer-events: none; background: #fff; border: 1px solid #d9d8d2; border-radius: 6px; box-shadow: 0 2px 8px rgba(0,0,0,.12); padding: 7px 10px; font-size: 12px; line-height: 1.5; white-space: nowrap; display: none; z-index: 5; }
    .gk-corpo { position: relative; }
    .gk-legenda { display: flex; flex-direction: column; gap: 5px; font-size: 12px; color: #52514e; position: absolute; top: 0; }
    .gk-legenda .gk-leg-sec { font-size: 11px; font-weight: 700; color: #555; margin-top: 6px; text-transform: uppercase; }
    .gk-rodape { display: flex; flex-wrap: wrap; gap: 8px 28px; font-size: 11.5px; color: #8a8984; margin: 8px 0 4px; }
    .gk-rodape .gk-cores { display: inline-flex; flex-wrap: wrap; align-items: center; gap: 14px; }
    .gk-rodape .gk-cores span { display: inline-flex; align-items: center; gap: 5px; color: #52514e; }
    .gk-sw-cor { width: 14px; height: 12px; border-radius: 2px; display: inline-block; border: 1px solid rgba(0,0,0,.08); }
    .gk-legenda span { display: inline-flex; align-items: center; gap: 6px; white-space: nowrap; }
    .gk-sw-dash { width: 22px; border-top: 2px dashed #6f6e69; display: inline-block; }
    .gk-sw-line { width: 22px; border-top: 2.5px solid #2a78d6; display: inline-block; }
    .gk-sw-bar { width: 14px; height: 10px; background: #2a78d6; opacity: .3; border-radius: 2px; display: inline-block; }
    .gk-sw-hoje { width: 14px; height: 10px; border: 2px solid #007bff; display: inline-block; box-sizing: border-box; }
    .gk-nota { font-size: 11.5px; color: #8a8984; margin: 10px 0 4px; }
    .gk-tabela { border-collapse: collapse; table-layout: fixed; font-size: 12.5px; margin-top: 10px; }
    .gk-tabela td, .gk-tabela th { padding: 6px 6px; text-align: center; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
    .gk-tabela th { font-size: 11.5px; font-weight: 700; color: #52514e; background: #f8f9fa; border-bottom: 1px solid #d9d8d2; }
    .gk-tabela td { border-bottom: 1px solid #eceae4; }
    .gk-tabela td.gk-kacel { text-align: left; font-weight: 700; color: #1a1a1a; }
    .gk-tabela tr.gk-total td { font-weight: 700; border-top: 2px solid #d9d8d2; }
    .gk-tabela .gk-gap { border-bottom: none; background: none; }
    .gk-tabela .gk-res { background: #fafaf8; }
    .gk-tabela .gk-res-1 { border-left: 2px solid #d9d8d2; }
    .gk-tabela .gk-big { display: block; font-size: 13.5px; font-weight: 700; color: #1a1a1a; }
    .gk-tabela .gk-small { display: block; font-size: 11px; color: #6f6e69; margin-top: 1px; }
    .gk-c-ok { background: #e1f3e5; } .gk-c-warn { background: #fff0c2; } .gk-c-bad { background: #fcdcdc; } .gk-c-over { background: #edcfbf; }
    .gk-pct { display: inline-block; min-width: 44px; padding: 2px 7px; border-radius: 10px; color: #fff; font-weight: 700; font-size: 12px; }
    .gk-tabela tr.gk-ka td { text-align: left; padding: 8px 6px 2px; border-top: 1px solid #eceae4; font-size: 12.5px; color: #52514e; }
    .gk-tabela tr.gk-ka td b.gk-nome { color: #1a1a1a; font-size: 13px; margin-right: 10px; }
    .gk-tabela tr.gk-ka.gk-total td { border-top: 2px solid #d9d8d2; }
    .gk-tabela tr.gk-val td { padding-bottom: 8px; }
    .gk-tabela .p { color: #8a8984; }
    .gk-tabela td.gk-fut .gk-big { color: #8f8e88; font-weight: 600; }
    .gk-tabela td.gk-fut .gk-small { color: #a8a7a1; }
    .gk-prov { color: #b26b00; font-weight: 700; margin-right: 2px; }
    .gk-tabela .gk-conf { color: #b26b00; margin-left: 3px; }
    .ohf-porpreencher { color: #b26b00; font-style: italic; }
    /* Hydra: quantidade provisória (até ficar gravada na Qtd Produzida) */
    .pp-tag-hydra { display: inline-block; font-size: 10px; font-weight: 700; color: #6d28d9; border: 1px solid #c4b5fd; background: #f5f3ff; border-radius: 3px; padding: 0 4px; margin-left: 4px; vertical-align: 1px; cursor: help; }
    .pp-hydra-dot { display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: #7c3aed; margin-left: 3px; vertical-align: 1px; }
    /* Edição no popup (OHF) */
    .ohf-edicao { margin-top: 12px; padding-top: 10px; border-top: 1px solid #eee; }
    .ed-campo { margin-bottom: 8px; }
    .ed-campo label { display: block; font-size: 11px; font-weight: 700; color: #555; margin-bottom: 2px; }
    .ed-campo .form-control { font-size: 12px; }
    .ed-acoes { display: flex; align-items: center; justify-content: flex-end; gap: 8px; flex-wrap: wrap; }
    .ed-acoes .btn { font-weight: 700; font-size: 12px; }
    #edMensagem { margin-right: auto; font-size: 12px; color: #6f6e69; }
    #edMensagem.ok { color: #176e17; font-weight: 700; }
    #edMensagem.erro { color: #b00000; font-weight: 700; }
    #btnEditarItem.btn-ohf-form { background: none !important; border: none !important; color: #0056b3 !important; min-width: 0 !important; font-weight: 600 !important; text-decoration: underline; }
    .ohf-ajuda { font-size: 11px; color: #6f6e69; padding: 6px 15px 0; line-height: 1.35; }
    .ohf-ajuda b { color: #52514e; }
    /* Hoje: uma só moldura azul à volta da coluna inteira, como no calendário */
    .gk-tabela th.gk-hoje { box-shadow: inset 2px 0 #007bff, inset -2px 0 #007bff, inset 0 2px #007bff; color: #007bff; }
    .gk-tabela td.gk-hoje { box-shadow: inset 2px 0 #007bff, inset -2px 0 #007bff; }
    .gk-tabela tr:last-child td.gk-hoje { box-shadow: inset 2px 0 #007bff, inset -2px 0 #007bff, inset 0 -2px #007bff; }
    .gk-desvio-neg { color: #e02424; font-weight: 700; }
    .gk-desvio-pos { color: #1fa84a; font-weight: 700; }
    .gk-estado { display: inline-block; font-size: 11px; font-weight: 700; padding: 1px 7px; border-radius: 9px; color: #fff; margin-left: 6px; }
    .gk-vazio { font-size: 13px; color: #8a8984; padding: 18px 0 6px; }

    /* ===== Grelha comum (usada pela vista de turnos e imitada no FullCalendar) ===== */
    .turnos-grid { width: 100%; border-collapse: collapse; table-layout: fixed; }
    .turnos-grid th, .turnos-grid td { border: 1px solid #ddd; vertical-align: top; padding: 4px; }
    .turnos-grid thead th { background-color: #f8f9fa; text-align: center; font-size: 13px; padding: 6px 4px; }
    .turnos-grid thead th.turno-col-label { width: 115px; }
    .turnos-grid th.turno-label { width: 115px; text-align: left; vertical-align: middle; padding: 6px 8px; }
    .turno-label .turno-nome { font-weight: bold; font-size: 13px; display: block; }
    .turno-label .turno-icone { font-size: 15px; width: 18px; margin-right: 6px; text-align: center; }
    .turno-label .turno-horas { display: block; padding-left: 24px; }
    .turno-label .turno-horas { font-size: 11px; color: #555; font-weight: 600; }
    .turnos-grid td.turno-celula { height: 200px; }
    .turnos-grid tbody tr + tr th, .turnos-grid tbody tr + tr td { border-top: 2px solid #999; }
    /* Hoje: uma só moldura azul à volta do dia inteiro (cabeçalho + todos os turnos) */
    .turnos-grid thead th.hoje { color: #007bff; border: 2px solid #007bff; border-bottom-width: 1px; border-bottom-color: #ddd; }
    .turnos-grid td.hoje { border-left: 2px solid #007bff; border-right: 2px solid #007bff; }
    .turnos-grid tbody tr:last-child td.hoje { border-bottom: 2px solid #007bff; }

    /* Faixas dos turnos ligeiramente mais suaves, para dar destaque aos cartões */
    .turno-manha { background-color: #fff9e0; }
    .turno-tarde { background-color: #ffecd8; }
    .turno-noite { background-color: #e6eaf6; }
    .turno-sem   { background-color: #f3f3f3; }


    /* ===== FullCalendar (OPA / OPT) adaptado ao estilo da grelha acima ===== */
    #calendarsContainer .fc-toolbar { display: none; }                       /* usamos a barra comum */
    #calendarsContainer .fc-unthemed th,
    #calendarsContainer .fc-unthemed td,
    #calendarsContainer .fc-unthemed thead,
    #calendarsContainer .fc-unthemed tbody,
    #calendarsContainer .fc-unthemed .fc-row { border-color: #ddd; }
    #calendarsContainer .fc th.fc-day-header { background-color: #f8f9fa; font-size: 13px; font-weight: bold; padding: 6px 4px; }
    #calendarsContainer .fc th.fc-day-header.fc-today { color: #007bff; }
    #calendarsContainer .fc th.fc-week-number { background-color: #f8f9fa; font-size: 12px; }
    #calendarsContainer .fc-unthemed .fc-bg td.fc-today { background: transparent; box-shadow: inset 0 0 0 2px #007bff; }
    #calendarsContainer .fc-day-top.fc-today .fc-day-number { color: #007bff; font-weight: bold; }
</style>

<div class="main mt-1" style="font-family: Arial, sans-serif;">
    <div class="container-fluid">
        <h2 style="margin: 4px 0 16px 4px; font-size:25px; font-weight:700; color:#1a1a1a; letter-spacing:0.3px;">Production Plan &amp; Monitoring System</h2>
        <div class="row">
            <div class="col-md-10">
                <div class="d-flex flex-wrap align-items-center mb-1">
                    <span class="cc-title">Áreas:</span>
                    <div id="areaButtonsContainer" class="d-flex flex-wrap align-items-center"></div>
                </div>

                <div class="d-flex flex-wrap justify-content-between align-items-center mb-2">
                    <div class="d-flex flex-wrap align-items-center">
                        <span class="cc-title">Centros de Custo:</span>
                        <!-- Botões de CC gerados dinamicamente a partir dos dados das 3 listas -->
                        <div id="ccButtonsContainer" class="d-flex flex-wrap align-items-center"></div>
                    </div>

                </div>

                <hr style="margin-top: 6px; margin-bottom: 10px;"/>

                <!-- Barra de ferramentas comum (navegação, título, 5/7 dias, Mês/Semana) -->
                <div id="calToolbar"></div>
                <!-- Calendários FullCalendar (OPA/OPT) criados dinamicamente: um por Área + CC -->
                <div id="calendarsContainer"></div>
                <!-- Vista semanal por turnos (áreas da lista OHF) -->
                <div id="shiftCalendar" style="display:none;"></div>
            </div>

            <div class="col-md-2" style="border-left: 1px solid #e2e8f0; padding-left: 15px; margin-top: 0;">
                <div class="legend-panel">
                    <div class="legend-header"><i class="fa fa-tags"></i> Legendas</div>

                    <!-- STATUS: sempre visível, igual em todas as áreas -->
                    <!-- PRIORIDADE: primeira legenda, sempre visível em qualquer área -->
                    <div id="legendaPrioridade">
                        <div class="legend-sec">PRIORIDADE:</div>
                        <div class="legend-prio"><span class="pp-prio">1</span><span>Ordem de produção no dia/turno<br/><small>1 = mais prioritário</small></span></div>
                    </div>

                    <div id="legendaStatus">
                        <div class="legend-sec sep">STATUS:</div>
                        <div class="legend-card st-planeado"><span class="pp-status"><i></i>Planeado</span></div>
                        <div class="legend-card st-preparada"><span class="pp-status"><i></i>Preparada</span></div>
                        <div class="legend-card st-emcurso"><span class="pp-status"><i></i>Em curso</span></div>
                        <div class="legend-card st-produzido"><span class="pp-status"><i></i>Produzido</span></div>
                        <div class="legend-card st-interrompido"><span class="pp-status"><i></i>Interrompido</span></div>
                    </div>

                    <!-- Só nas áreas OPA / OPT -->
                    <div id="legendaProducao">
                        <div class="legend-sec sep">ENGENHARIA:</div>
                        <div class="legend-card st-ensaio"><span class="pp-tag-ensaio"><i class="fa fa-flask"></i>Ensaio Ferramenta</span></div>

                        <div class="legend-sec sep">VALIDAÇÕES:</div>
                        <div class="legend-chips">
                            <span class="pp-chip ok"><i class="fa fa-check"></i>OK</span>
                            <span class="pp-chip nok"><i class="fa fa-times"></i>NOK</span>
                            <span class="pp-chip pend"><i class="fa fa-clock-o"></i>Pendente</span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Planeado vs Produzido acumulado da semana (Área + CC + semana do calendário).
             Ocupa a largura toda: os dias ficam por baixo do calendário e o resumo e a legenda
             por baixo da coluna das Legendas. -->
        <div class="row"><div class="col-12" id="graficoKA"></div></div>
    </div>
</div>

<div class="modal fade" id="modalDetalhes" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document" style="max-width: 600px;">
        <div class="modal-content" style="border-radius: 6px; border: 1px solid #bbb; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
            <div class="modal-header" style="border-bottom: 1px solid #eee; padding: 12px 20px; background-color: #f8f9fa;">
                <h4 class="modal-title" id="modalTitle" style="font-weight: bold; color: #222; font-size: 16px;">Detalhes da Operação</h4>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close" style="font-size: 1.5rem; background: none; border: none; line-height: 1;">&times;</button>
            </div>
            <div class="modal-body" style="padding: 15px 20px; font-family: Arial, sans-serif;">
                <div class="row">
                    <div class="col-6" id="colEsquerda" style="border-right: 1px solid #eee;">
                        <div class="modal-section-title">Dados Base</div>
                        <div class="row">
                            <div class="col-6 modal-metadata-label">Material (KA):</div>
                            <div class="col-6 modal-metadata-value" id="lblKA">-</div>

                            <div class="col-6 modal-metadata-label">Centro Custo:</div>
                            <div class="col-6 modal-metadata-value" id="lblCC">-</div>

                            <div class="col-6 modal-metadata-label" id="lblStatusLabel">Status:</div>
                            <div class="col-6 modal-metadata-value" id="lblStatus">-</div>

                            <div class="col-6 modal-metadata-label">Data:</div>
                            <div class="col-6 modal-metadata-value" id="lblData">-</div>

                            <div class="col-6 modal-metadata-label" id="lblTurnoLabel" style="display:none;">Turno:</div>
                            <div class="col-6 modal-metadata-value" id="lblTurno" style="display:none;">-</div>
                        </div>
                    </div>

                    <div class="col-6" id="colDireita">
                        <div id="containerValidacoes">
                            <div class="modal-section-title" id="lblValidacoesTitle">Validações</div>
                            <div class="row">
                                <div class="col-6 modal-metadata-label" id="lblVal1Label">Ferramenta:</div>
                                <div class="col-6 modal-metadata-value" id="lblPopFerramenta">-</div>

                                <div class="col-6 modal-metadata-label" id="lblVal2Label">Matéria-Prima:</div>
                                <div class="col-6 modal-metadata-value" id="lblPopDispMP">-</div>

                                <div class="col-6 modal-metadata-label" id="lblVal3Label">Abastecimento:</div>
                                <div class="col-6 modal-metadata-value" id="lblPopAbastecida">-</div>
                            </div>
                        </div>

                        <div id="containerMétricas">
                            <div class="modal-section-title" id="rightSectionTitle">PLANEAMENTO</div>
                            <div class="row" id="rowMétricasProducao">
                                <div class="col-7 modal-metadata-label">Horas Prod. Plan.:</div>
                                <div class="col-5 modal-metadata-value" id="lblHorasPlan">-</div>

                                <div class="col-7 modal-metadata-label">Qtd Planeada:</div>
                                <div class="col-5 modal-metadata-value" id="lblQtdPlan">-</div>

                                <div class="col-7 modal-metadata-label">Qtd Produzida:</div>
                                <div class="col-5 modal-metadata-value" id="lblQtdProd">-</div>

                                <div class="col-7 modal-metadata-label">Falta Produzir:</div>
                                <div class="col-5 modal-metadata-value" id="lblFaltaProd">-</div>

                                <div class="col-7 modal-metadata-label">Qtd Mínima:</div>
                                <div class="col-5 modal-metadata-value" id="lblQtdMin">-</div>

                                <div class="col-7 modal-metadata-label">MP Necessária:</div>
                                <div class="col-5 modal-metadata-value" id="lblMPNecessaria">-</div>

                                <div class="col-7 modal-metadata-label">MP Mínima:</div>
                                <div class="col-5 modal-metadata-value" id="lblMPMinima">-</div>
                            </div>
                            <div class="row" id="rowMétricasEnsaio" style="display:none;">
                                <div class="col-7 modal-metadata-label">Qtd. Ensaio:</div>
                                <div class="col-5 modal-metadata-value" id="lblQtdEnsaio">-</div>
                            </div>
                            <div class="row" id="rowMetricasOHF" style="display:none;">
                                <div class="col-12" style="padding:0 15px;"><div class="modal-section-title" id="lblTurnoTitle">Este turno</div></div>
                                <div class="col-7 modal-metadata-label">Horas Prod. Plan.:</div>
                                <div class="col-5 modal-metadata-value" id="lblHorasPlanOHF">-</div>

                                <div class="col-7 modal-metadata-label">Qtd Planeada:</div>
                                <div class="col-5 modal-metadata-value" id="lblQtdPlanOHF">-</div>

                                <div class="col-7 modal-metadata-label" title="Quantidade produzida neste turno, registada pelo operador (campo Qtd Produzida)">Qtd Produzida:</div>
                                <div class="col-5 modal-metadata-value" id="lblQtdProdOHF">-</div>

                                <div class="col-7 modal-metadata-label">Falta Produzir:</div>
                                <div class="col-5 modal-metadata-value" id="lblFaltaOHF">-</div>

                                <div class="col-12 mt-2" style="padding:0 15px;"><div class="modal-section-title" id="lblSeqTitle" style="display:none;">Sequência</div></div>
                                <div class="col-7 modal-metadata-label seq-ohf" style="display:none;" title="Soma da Qtd Planeada dos turnos seguidos com o mesmo KA">Qtd Total:</div>
                                <div class="col-5 modal-metadata-value seq-ohf" id="lblQtdTotalOHF" style="display:none;">-</div>

                                <div class="col-7 modal-metadata-label seq-ohf" style="display:none;" title="Soma da Qtd Produzida dos turnos da sequência">Total Produzido:</div>
                                <div class="col-5 modal-metadata-value seq-ohf" id="lblTotalProdOHF" style="display:none;">-</div>

                                <div class="col-7 modal-metadata-label seq-ohf" style="display:none;">Falta Produzir:</div>
                                <div class="col-5 modal-metadata-value seq-ohf" id="lblTotalFaltaOHF" style="display:none;">-</div>

                                <div class="col-12 ohf-ajuda">A <b>Qtd Produzida</b> vem do Hydra e fica gravada quando o registo passa a <b>Produzido</b>. Basta mudar o <b>Status</b> em baixo e carregar em <b>Guardar</b>.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="ohfEdicao" class="ohf-edicao" style="display:none;">
                    <div class="modal-section-title">Registo do turno</div>
                    <div class="row">
                        <div class="col-6 ed-campo"><label for="edStatus">Status</label><select id="edStatus" class="form-control form-control-sm"></select></div>
                        <div class="col-6"></div>
                        <div class="col-4 ed-campo ed-ferramenta"><label for="edFerramenta">Ferramenta</label><select id="edFerramenta" class="form-control form-control-sm"></select></div>
                        <div class="col-4 ed-campo ed-mp"><label for="edMP">Matéria-Prima</label><select id="edMP" class="form-control form-control-sm"></select></div>
                        <div class="col-4 ed-campo ed-abast"><label for="edAbast">Abastecimento</label><select id="edAbast" class="form-control form-control-sm"></select></div>
                        <div class="col-12 ed-campo"><label for="edComentarios">Comentários</label><textarea id="edComentarios" rows="2" class="form-control form-control-sm"></textarea></div>
                    </div>
                    <div class="ed-acoes">
                        <span id="edMensagem"></span>
                        <button type="button" id="btnGuardarOHF" class="btn btn-sm btn-success"><i class="fa fa-check"></i> Guardar</button>
                    </div>
                </div>

                <div class="text-center mt-3 pt-2" style="border-top: 1px solid #eee;">
                    <a id="btnEditarItem" href="#" class="btn btn-primary" style="background-color: #007bff; border-color: #007bff; min-width: 120px; font-weight: bold; font-size: 13px;">Editar Registo</a>
                </div>
            </div>
        </div>
    </div>
</div>

<script type="text/javascript">
$(document).ready(function () {
    var site = _spPageContextInfo.webAbsoluteUrl;
    // ---------- Janela de dados carregada ----------
    // Carrega os registos a partir de (hoje - SEMANAS_HISTORICO), mas nunca antes do arranque
    // do sistema. Para ver mais histórico, aumentar SEMANAS_HISTORICO.
    var DATA_INICIO_SISTEMA = '2026-08-10';
    var SEMANAS_HISTORICO = 8;
    var DATA_MINIMA = (function () {
        var relativa = moment().subtract(SEMANAS_HISTORICO, 'weeks').startOf('isoWeek').format('YYYY-MM-DD');
        return relativa > DATA_INICIO_SISTEMA ? relativa : DATA_INICIO_SISTEMA;
    })();

    // ---------- Lista: Plano de Produção (OPA / OPT) ----------
    var listGuidProd = "D973A15A-A49F-406C-98AB-1D7110F753D2";
    var urlProd = site + "/_api/web/lists(guid'" + listGuidProd + "')/items?$select=ID,CC,Data,Title,Status,Disponibilidade_x0020_Ferramenta,Disponibilidade,MP_x0020_Abastecida,Horas_x0020_de_x0020_Produ_x00e7,MP_x0020__x0028_Kg_x0029_,Qtd_x0020_Planeada,Qtd_x0020_Produzida,dz8f,vs4x,Prioridade,OData__x00c1_rea";

    // ---------- Lista: Ensaios de Ferramenta ----------
    var listGuidEnsaio = "A89875EF-B351-4844-AEE2-0C44A059374A";
    var urlEnsaio = site + "/_api/web/lists(guid'" + listGuidEnsaio + "')/items?$select=ID,C_x002e__x0020_Custo,Data,KA_x0020_BIP,Disponibilidade_x0020_da_x0020_F,MP_x0020_e_x0020_BIPS,Qtd_x002e__x0020_Ensaio,OData__x00c1_rea";

    // ---------- Lista: OHF | Plano Produção (vista por turnos) ----------
    // Nota: o campo interno "_x00c1_rea" é devolvido pela REST API como "OData__x00c1_rea"
    var listGuidOHF = "95EC5EF9-D77B-4C96-B0B0-7409E4365325";
    var urlOHF = site + "/_api/web/lists(guid'" + listGuidOHF + "')/items?$select=ID,OData__x00c1_rea,CC,Data,DataProducao,KA,Turno,Status,Qtd_x0020_Planeada,Horas_x0020_Produ_x00e7__x00e3_o,Prioridade,DisponibilidadeFerramenta,DisponibilidadeMP,MPAbastecida,Qtd_x0020_Produzida,QtdTotalDia,Modified,Created";

    // Definição dos turnos (ordem = ordem das faixas no calendário: Noite → Manhã → Tarde)
    var TURNOS = [
        { chave: 'Noite', nome: 'Noite', horario: '23:00 – 06:00', classe: 'turno-noite', icone: 'fa-moon-o' },
        { chave: 'Manha', nome: 'Manhã', horario: '06:00 – 14:30', classe: 'turno-manha', icone: 'fa-sun-o' },
        { chave: 'Tarde', nome: 'Tarde', horario: '14:30 – 23:00', classe: 'turno-tarde', icone: 'fa-adjust' }
    ];

    // Alternância 5 / 7 dias (comum a todos os calendários). Começa em 5 dias (Seg–Sex).
    var mostrarFimDeSemana = false;

    var currentArea = null;
    var currentCC = null;
    var allEvents = [];
    var areaCCMap = {};
    var areasTurnos = new Set();          // Áreas vindas da lista OHF -> vista por turnos
    var initializedCalendars = new Set(); // chaves "Área|CC" já inicializadas no FullCalendar
    // Semana de referência PARTILHADA por todas as áreas e CCs (segunda-feira da semana).
    // Ao trocar de área ou CC, o calendário abre sempre nesta semana.
    var dataReferencia = moment().startOf('isoWeek');

    // ---------- Regresso do formulário ----------
    // Ao abrir "Editar Registo", a página envia no parâmetro Source o endereço desta página com a
    // Área, o CC e a semana atuais. Ao Guardar/Cancelar, o SharePoint volta a esse endereço e o
    // calendário reabre exatamente onde estava.
    function lerParametro(nome) {
        var m = new RegExp('[?&]' + nome + '=([^&#]*)', 'i').exec(window.location.search);
        return m ? decodeURIComponent(m[1].replace(/\+/g, ' ')) : null;
    }
    var areaInicial = lerParametro('area');
    var ccInicial = lerParametro('cc');
    (function () {
        var sem = lerParametro('semana');
        if (sem && moment(sem, 'YYYY-MM-DD', true).isValid()) dataReferencia = moment(sem, 'YYYY-MM-DD').startOf('isoWeek');
    })();

    function urlRegresso() {
        var outros = window.location.search.replace(/^\?/, '').split('&').filter(function (p) {
            return p && !/^(area|cc|semana)=/i.test(p);
        });
        outros.push('area=' + encodeURIComponent(currentArea || ''));
        outros.push('cc=' + encodeURIComponent(currentCC || ''));
        outros.push('semana=' + dataReferencia.format('YYYY-MM-DD'));
        return window.location.protocol + '//' + window.location.host + window.location.pathname + '?' + outros.join('&');
    }

    function urlEditar(listGuid, id) {
        return site + "/_layouts/15/listform.aspx?PageType=6&ListId=%7B" + listGuid + "%7D&ID=" + id +
               "&Source=" + encodeURIComponent(urlRegresso());
    }

    // Lista explícita de Áreas Permitidas (apenas para as listas de Produção e Ensaio)
    var areasPermitidas = ["OPA", "OPT"];

    // Áreas com vista por TURNOS: todas as opções do campo Área da lista OHF (mesmo sem
    // registos) + qualquer área cujo nome comece por este prefixo (ex: OHF1, OHF2, OHF3).
    var PREFIXO_AREAS_TURNOS = 'OHF';

    // Validações mostradas nos registos da lista OHF, por Área.
    // 'ferramenta' = Disponibilidade Ferramenta | 'mp' = Disponibilidade MP | 'abast' = MP Abastecida
    // Áreas não listadas usam o valor de 'default'.
    var VALIDACOES_OHF = {
        'OHF1': ['ferramenta', 'mp'],
        'default': ['ferramenta']
    };
    function validacoesOHF(area) {
        var a = String(area || '').trim().toUpperCase();
        return VALIDACOES_OHF[a] || VALIDACOES_OHF['default'];
    }

    // ---------- Gravar na lista OHF as validações partilhadas da sequência ----------
    // true  = a página atualiza os registos da lista OHF para ficarem com o valor da sequência
    // false = só muda o que é mostrado no calendário
    // Requer o Controlo de Versões ativo na lista OHF (Definições da lista → Definições de controlo de versões).
    var GRAVAR_VALIDACOES_SEQUENCIA = true;
    var CAMPOS_VALIDACAO_OHF = {   // propriedade no calendário -> [nome interno na lista, chave em VALIDACOES_OHF]
        dispFerramenta: ['DisponibilidadeFerramenta', 'ferramenta'],
        dispMP:         ['DisponibilidadeMP', 'mp'],
        mpAbastecida:   ['MPAbastecida', 'abast']
    };

    function textoValidacao(v) { return String(v || '').replace(/<[^>]*>/g, '').trim(); }

    // ================= Hydra (quantidades por turno) =================
    // A lista OHF guarda, por ações Infowise (B1/B2/B3), o início da contagem (Hydra desde)
    // e a quantidade do Hydra. A página lê também a lista Hydra SQL diretamente, para ter a
    // quantidade do turno a cada 15 minutos (a lista OHF só é atualizada de hora a hora).
    var listGuidHydra = "6A0C988B-557F-4812-A21D-A486C6B3770A";
    var urlHydra = site + "/_api/web/lists(guid'" + listGuidHydra + "')/items?$select=Title,Workplace,TShift,DataUntil,Total_x0020_good_x0020_quantity,Modified&$top=5000";
    var urlOHFHydra = site + "/_api/web/lists(guid'" + listGuidOHF + "')/items?$select=ID,Data,Hydra_x0020_desde,Qtd_x0020_Hydra,Qtd_x0020_Hydra_x0020_turno,Qtd_x0020_Hydra_x0020_fechados,Coment_x00e1_rios";
    var indiceHydra = {};       // 'cc|ka|aaaa-mm-dd|Turno' -> quantidade (Turno: Noite, Manha, Tarde, Total)
    var hydraAte = null;        // hora da última atualização do Hydra (moment)
    var hydraDisponivel = false;

    function chaveHydra(cc, ka, dia, turno) {
        return String(cc || '').trim().toUpperCase() + '|' + String(ka || '').trim().toUpperCase() + '|' + dia + '|' + turno;
    }

    function turnoHydra(tshift) {
        var t = String(tshift || '').trim().toLowerCase();
        if (t.indexOf('night') === 0 || t.indexOf('noit') === 0) return 'Noite';
        if (t.indexOf('morn') === 0 || t.indexOf('manh') === 0) return 'Manha';
        if (t.indexOf('after') === 0 || t.indexOf('tard') === 0) return 'Tarde';
        if (t.indexOf('total') === 0) return 'Total';
        return '';
    }

    // Lê a lista Hydra SQL; resolve sempre (sem ela a página funciona como antes)
    function obterHydra() {
        var d = $.Deferred();
        lerTodasAsPaginas(urlHydra)
            .done(function (r) { hydraDisponivel = true; d.resolve(r); })
            .fail(function (xhr) { console.warn('Lista Hydra SQL indisponível:', xhr && xhr.status); hydraDisponivel = false; d.resolve([]); });
        return d.promise();
    }

    // Colunas Hydra da lista OHF (podem ainda não existir): resolve sempre
    function obterOHFHydra() {
        var d = $.Deferred();
        lerTodasAsPaginas(urlOHFHydra + '&$top=5000')
            .done(function (r) { d.resolve(r); })
            .fail(function (xhr) {
                // Sem as colunas Hydra (ainda não criadas): lê só os campos do popup
                console.warn('Colunas Hydra da lista OHF ainda não disponíveis:', xhr && xhr.status);
                lerTodasAsPaginas(site + "/_api/web/lists(guid'" + listGuidOHF + "')/items?$select=ID,Coment_x00e1_rios&$top=5000")
                    .done(function (r) { d.resolve(r); })
                    .fail(function () { d.resolve([]); });
            });
        return d.promise();
    }

    function indexarHydra(itens) {
        indiceHydra = {};
        hydraAte = null;
        (itens || []).forEach(function (h) {
            var turno = turnoHydra(h.TShift);
            if (!turno || !h.DataUntil) return;
            var dia = moment(h.DataUntil).format('YYYY-MM-DD');
            var k = chaveHydra(h.Workplace, h.Title, dia, turno);
            var q = parseFloat(h.Total_x0020_good_x0020_quantity);
            indiceHydra[k] = (indiceHydra[k] || 0) + (isNaN(q) ? 0 : q);
            if (h.Modified) {
                var m = moment(h.Modified);
                if (!hydraAte || m.isAfter(hydraAte)) hydraAte = m;
            }
        });
    }

    function qtdHydraDe(cc, ka, dia, turno) {
        var v = indiceHydra[chaveHydra(cc, ka, dia, turno)];
        return v === undefined ? null : v;
    }

    function textoHydraAte() {
        if (!hydraDisponivel) return 'Hydra indisponível';
        return hydraAte ? 'Hydra até ' + hydraAte.format('HH:mm') : 'Hydra sem dados';
    }

    // Dia e turno reais de uma data/hora (Noite 23:00–06:00 conta para o dia seguinte)
    function turnoReal(dataHora) {
        var m = moment(dataHora);
        var min = m.hours() * 60 + m.minutes();
        var turno = (min >= 1380 || min < 360) ? 'Noite' : (min < 870 ? 'Manha' : 'Tarde');
        return { dia: diaDoTurno(dataHora), turno: turno };
    }

    /* Quantidade do Hydra de um registo OHF: os turnos já fechados (gravados pela ação B3)
       mais o turno em que está a contar, lido do Hydra SQL (15 min) ou, sem ele, da lista. */
    function aplicarHydraOHF(evt) {
        evt.qtdHydra = null;
        evt.hydraFonte = '';
        if (evt.hydraDesde) {
            var r = turnoReal(evt.hydraDesde);
            var aoVivo = qtdHydraDe(evt.cc, evt.title, r.dia, r.turno);
            evt.turnoHydra = r;
            evt.qtdHydraTurnoAoVivo = aoVivo;
            if (aoVivo !== null) {
                evt.qtdHydra = (evt.qtdHydraFechados || 0) + aoVivo;
                evt.hydraFonte = 'aovivo';
            } else if (evt.qtdHydraLista !== null) {
                evt.qtdHydra = evt.qtdHydraLista;
                evt.hydraFonte = 'lista';
            } else if (evt.qtdHydraFechados) {
                evt.qtdHydra = evt.qtdHydraFechados;
                evt.hydraFonte = 'lista';
            }
        }
        // Sem «Hydra desde» o registo ainda não começou: o 0 da lista não é produção
    }

    function numOuNulo(v) {
        if (v === undefined || v === null || v === '') return null;
        var n = parseFloat(v);
        return isNaN(n) ? null : n;
    }

    // Qtd Produzida do registo: a da lista ou, enquanto não houver, a do Hydra (provisória)
    function qtdProduzidaEfetiva(evt) {
        var q = numOuNulo(evt.qtdProduzida);
        if (q !== null) return { v: q, hydra: false };
        if (evt.tipoLista === 'OHF' && evt.qtdHydra !== null && evt.qtdHydra !== undefined) return { v: evt.qtdHydra, hydra: true };
        return null;
    }

    function etiquetaHydraHtml(titulo) {
        return ' <span class="pp-tag-hydra" title="' + escHtml(titulo || textoHydraAte()) + '">Hydra</span>';
    }

    // ================= Edição no popup (OHF) =================
    var OPCOES_STATUS_OHF = ['Planeado', 'Preparada', 'Em curso', 'Produzido', 'Interrompido'];
    var OPCOES_VALIDACAO = ['OK', 'NOK', 'Pendente'];
    var CAMPOS_EDICAO_OHF = {
        status: 'Status',
        dispFerramenta: 'DisponibilidadeFerramenta',
        dispMP: 'DisponibilidadeMP',
        mpAbastecida: 'MPAbastecida',
        comentarios: 'Coment_x00e1_rios'
    };
    var eventoEmEdicao = null;

    function opcoesHtml(opcoes, atual) {
        var a = textoValidacao(atual);
        var h = '';
        if (a && opcoes.indexOf(a) === -1) h += '<option value="' + escHtml(a) + '" selected>' + escHtml(a) + '</option>';
        if (!a) h += '<option value="" selected>—</option>';
        opcoes.forEach(function (o) { h += '<option value="' + escHtml(o) + '"' + (o === a ? ' selected' : '') + '>' + escHtml(o) + '</option>'; });
        return h;
    }

    function preencherEdicaoOHF(evt) {
        eventoEmEdicao = evt;
        var vals = validacoesOHF(evt.area);
        $('#edStatus').html(opcoesHtml(OPCOES_STATUS_OHF, evt.status));
        $('#edFerramenta').html(opcoesHtml(OPCOES_VALIDACAO, evt.dispFerramenta));
        $('#edMP').html(opcoesHtml(OPCOES_VALIDACAO, evt.dispMP));
        $('#edAbast').html(opcoesHtml(OPCOES_VALIDACAO, evt.mpAbastecida));
        $('.ed-ferramenta').toggle(vals.indexOf('ferramenta') !== -1);
        $('.ed-mp').toggle(vals.indexOf('mp') !== -1);
        $('.ed-abast').toggle(vals.indexOf('abast') !== -1);
        $('#edComentarios').val(evt.comentarios || '');
        $('#edMensagem').text('').removeClass('erro ok');
        $('#ohfEdicao').show();
    }

    // Campos alterados no formulário do popup, com os nomes internos da lista
    function dadosEditadosOHF(evt) {
        var d = {};
        var muda = function (campo, valor, atual) {
            if (String(valor === null ? '' : valor) !== String(atual === null || atual === undefined ? '' : atual)) d[CAMPOS_EDICAO_OHF[campo]] = valor;
        };
        muda('status', $('#edStatus').val() || null, textoValidacao(evt.status) || '');
        var vals = validacoesOHF(evt.area);
        if (vals.indexOf('ferramenta') !== -1) muda('dispFerramenta', $('#edFerramenta').val() || null, textoValidacao(evt.dispFerramenta));
        if (vals.indexOf('mp') !== -1) muda('dispMP', $('#edMP').val() || null, textoValidacao(evt.dispMP));
        if (vals.indexOf('abast') !== -1) muda('mpAbastecida', $('#edAbast').val() || null, textoValidacao(evt.mpAbastecida));
        muda('comentarios', $('#edComentarios').val() || null, evt.comentarios || '');
        return d;
    }

    /* Ao fechar (Produzido), a Qtd Produzida fica com a quantidade do Hydra acabada de ler,
       para o turno seguinte saber logo quanto foi produzido. A quantidade do turno também vai
       para a lista (Qtd Hydra turno), para a ação B4 não a substituir por um valor mais antigo. */
    function juntarQtdAoFechar(evt, dados) {
        if (dados.Status !== 'Produzido') return dados;
        if (evt.qtdHydra > 0) dados.Qtd_x0020_Produzida = evt.qtdHydra;
        // Data Produção = dia produtivo do turno em que produziu (a Noite conta para o dia
        // seguinte). Só se ainda estiver vazia.
        if (!evt.dataProducao) {
            var diaProd = evt.hydraDesde ? turnoReal(evt.hydraDesde).dia : turnoReal(moment()).dia;
            dados.DataProducao = diaProd + 'T12:00:00Z';
        }
        if (evt.temColunasHydra && evt.qtdHydraTurnoAoVivo !== null && evt.qtdHydraTurnoAoVivo !== undefined) {
            dados.Qtd_x0020_Hydra_x0020_turno = evt.qtdHydraTurnoAoVivo;
        }
        return dados;
    }

    // Volta a ler o Hydra SQL antes de fechar um registo (resolve sempre)
    function refrescarHydra() {
        var d = $.Deferred();
        obterHydra().done(function (itens) {
            if (hydraDisponivel) indexarHydra(itens);
            allEvents.forEach(function (e) { if (e.tipoLista === 'OHF') aplicarHydraOHF(e); });
            d.resolve();
        });
        return d.promise();
    }

    // Se o registo vai passar a Produzido, lê primeiro o Hydra; senão segue logo
    function antesDeFechar(dados) {
        return dados.Status === 'Produzido' ? refrescarHydra() : $.Deferred().resolve().promise();
    }

    function gravarOHF(id, dados) {
        return $.when(obterDigest(), obterTipoItemOHF()).then(function (digest, tipo) {
            return $.ajax({
                type: 'POST',
                url: site + "/_api/web/lists(guid'" + listGuidOHF + "')/items(" + id + ")",
                data: JSON.stringify($.extend({ __metadata: { type: tipo } }, dados)),
                contentType: 'application/json;odata=verbose',
                headers: { 'Accept': 'application/json;odata=verbose', 'X-RequestDigest': digest, 'IF-MATCH': '*', 'X-HTTP-Method': 'MERGE' }
            });
        });
    }

    // Depois de gravar: atualiza o registo em memória com o que foi para a lista
    function aplicarGravado(evt, dados) {
        if (dados.hasOwnProperty('Status')) evt.status = dados.Status || '';
        ['dispFerramenta', 'dispMP', 'mpAbastecida'].forEach(function (prop) {
            var nome = CAMPOS_EDICAO_OHF[prop];
            if (dados.hasOwnProperty(nome)) {
                evt[prop] = dados[nome] || '';
                if (evt.valOrig) evt.valOrig[prop] = dados[nome] || '';
            }
        });
        if (dados.hasOwnProperty('Coment_x00e1_rios')) evt.comentarios = dados.Coment_x00e1_rios || '';
        if (dados.hasOwnProperty('Qtd_x0020_Produzida')) evt.qtdProduzida = dados.Qtd_x0020_Produzida;
        if (dados.hasOwnProperty('DataProducao')) evt.dataProducao = dados.DataProducao;
        if (dados.hasOwnProperty('Qtd_x0020_Hydra_x0020_turno')) {
            evt.qtdHydraLista = (evt.qtdHydraFechados || 0) + dados.Qtd_x0020_Hydra_x0020_turno;
        }
        // Em curso agora: começa a contar o Hydra já (a ação B1 grava o mesmo na lista)
        if (dados.Status === 'Em curso' && !evt.hydraDesde) {
            evt.hydraDesde = moment().format();
            aplicarHydraOHF(evt);
        }
    }

    function mensagemEdicao(texto, tipo) {
        $('#edMensagem').text(texto).removeClass('erro ok').addClass(tipo || '');
    }

    function erroGravacao(x) {
        return x && x.status === 403 ? 'Sem permissão para gravar na lista OHF.' : 'Não foi possível gravar. Tente outra vez.';
    }

    function redesenharDepoisDeGravar(evtAbrir) {
        if (currentArea && modoTurnos()) renderShiftCalendar();
        agendarGraficoKA();
        if (evtAbrir) abrirModalDetalhes(evtAbrir);
    }

    $(document).on('click', '#btnGuardarOHF', function () {
        var evt = eventoEmEdicao;
        if (!evt) return;
        var dados = dadosEditadosOHF(evt);
        if (!Object.keys(dados).length) { mensagemEdicao('Sem alterações para gravar.'); return; }
        var $b = $(this).prop('disabled', true);
        mensagemEdicao(dados.Status === 'Produzido' ? 'A ler a quantidade no Hydra…' : 'A gravar…');
        antesDeFechar(dados)
            .then(function () {
                juntarQtdAoFechar(evt, dados);
                mensagemEdicao('A gravar…');
                return gravarOHF(evt.id, dados);
            })
            .done(function () {
                aplicarGravado(evt, dados);
                redesenharDepoisDeGravar(null);
                $('#modalDetalhes').modal('hide');
            })
            .fail(function (x) { mensagemEdicao(erroGravacao(x), 'erro'); })
            .always(function () { $b.prop('disabled', false); });
    });

    function obterDigest() {
        var d = $.Deferred();
        var local = $('#__REQUESTDIGEST').val();
        if (local) return d.resolve(local).promise();
        $.ajax({ type: 'POST', url: site + '/_api/contextinfo', headers: { 'Accept': 'application/json;odata=verbose' } })
            .done(function (r) { d.resolve(r.d.GetContextWebInformation.FormDigestValue); })
            .fail(function (x) { d.reject(x); });
        return d.promise();
    }

    function obterTipoItemOHF() {
        return $.ajax({ type: 'GET', url: site + "/_api/web/lists(guid'" + listGuidOHF + "')?$select=ListItemEntityTypeFullName",
                        headers: { 'Accept': 'application/json;odata=verbose' } })
                .then(function (r) { return r.d.ListItemEntityTypeFullName; });
    }

    // ---------- Validações partilhadas: "a última alteração ganha" ----------
    // Para cada sequência OHF e cada validação em que os registos NÃO estão todos iguais:
    //  1. lê o histórico de versões desse campo em cada registo (Lists.asmx GetVersionCollection);
    //  2. calcula quando o valor atual foi posto (a última mudança do campo, não do registo,
    //     por isso alterar a Qtd Produzida não conta);
    //  3. o valor posto mais recentemente ganha — OK, NOK ou Pendente — e é mostrado em todos;
    //  4. se GRAVAR_VALIDACOES_SEQUENCIA = true, grava esse valor nos registos diferentes.
    // Um Pendente/vazio que vem desde a criação do registo não conta como decisão (um registo
    // novo na sequência não apaga um OK). Sem histórico disponível, usa a data de modificação.
    var resolucaoSeq = {};   // 'cadeiaId|campo' -> { valor, origemId }

    function lerHistoricoCampo(id, campoInterno) {
        var d = $.Deferred();
        var env = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body>' +
                  '<GetVersionCollection xmlns="http://schemas.microsoft.com/sharepoint/soap/"><strlistID>{' + listGuidOHF + '}</strlistID>' +
                  '<strlistItemID>' + id + '</strlistItemID><strFieldName>' + campoInterno + '</strFieldName></GetVersionCollection></soap:Body></soap:Envelope>';
        $.ajax({ type: 'POST', url: site + '/_vti_bin/Lists.asmx', data: env, dataType: 'xml',
                 contentType: 'text/xml; charset=utf-8',
                 headers: { 'SOAPAction': 'http://schemas.microsoft.com/sharepoint/soap/GetVersionCollection' } })
            .done(function (xml) {
                var versoes = [];
                $(xml).find('*').filter(function () { return this.localName === 'Version' || this.nodeName === 'Version'; }).each(function () {
                    versoes.push({ v: this.getAttribute(campoInterno) || '', t: this.getAttribute('Modified') || '' });
                });
                versoes.sort(function (a, b) { return moment(b.t).valueOf() - moment(a.t).valueOf(); });   // mais recente primeiro
                d.resolve(versoes.length ? versoes : null);
            })
            .fail(function () { d.resolve(null); });
        return d.promise();
    }

    // Quando é que o valor atual do campo foi posto, e se vem desde a criação do registo
    function quandoFoiPosto(evt, prop, versoes) {
        var atual = estadoValidacao(evt.valOrig[prop]);
        if (versoes && versoes.length) {
            var i = 0;
            while (i + 1 < versoes.length && estadoValidacao(versoes[i + 1].v) === atual) i++;
            return { t: moment(versoes[i].t).valueOf(), desdeCriacao: i === versoes.length - 1, estado: atual };
        }
        var tm = moment(evt.modificado).valueOf(), tc = moment(evt.criado).valueOf();
        return { t: tm, desdeCriacao: !isNaN(tc) && Math.abs(tm - tc) < 60000, estado: atual };
    }

    function resolverValidacoesSequencias() {
        // 1) Sequências de todas as áreas/CCs OHF carregadas
        var pares = {};
        allEvents.forEach(function (e) {
            if (e.tipoLista === 'OHF' && e.area && e.cc) pares[e.area + '|' + e.cc] = [e.area, e.cc];
        });
        Object.keys(pares).forEach(function (k) { agruparTurnosOrdenados(pares[k][0], pares[k][1]); });

        var cadeias = {};
        allEvents.forEach(function (e) {
            if (e.tipoLista === 'OHF' && e.cadeiaN > 1 && e.valOrig) (cadeias[e.cadeiaId] = cadeias[e.cadeiaId] || []).push(e);
        });

        // 2) Pares (sequência, campo) com valores diferentes
        var pendentes = [];
        Object.keys(cadeias).forEach(function (cid) {
            var lista = cadeias[cid];
            var permitidas = validacoesOHF(lista[0].area);
            Object.keys(CAMPOS_VALIDACAO_OHF).forEach(function (prop) {
                if (permitidas.indexOf(CAMPOS_VALIDACAO_OHF[prop][1]) === -1) return;
                var estados = {};
                lista.forEach(function (e) { estados[estadoValidacao(e.valOrig[prop])] = true; });
                if (Object.keys(estados).length > 1) pendentes.push({ cid: cid, prop: prop, lista: lista });
            });
        });
        if (!pendentes.length) return;

        // 3) Histórico de cada registo envolvido (um pedido por registo e campo)
        var pedidos = {};
        pendentes.forEach(function (p) {
            p.lista.forEach(function (e) {
                var k = e.id + '|' + p.prop;
                if (!pedidos[k]) pedidos[k] = lerHistoricoCampo(e.id, CAMPOS_VALIDACAO_OHF[p.prop][0]);
            });
        });
        var chaves = Object.keys(pedidos);
        $.when.apply($, chaves.map(function (k) { return pedidos[k]; })).done(function () {
            var hist = {}, args = arguments;
            chaves.forEach(function (k, i) { hist[k] = args[i]; });

            // 4) Vencedor de cada (sequência, campo)
            var alteracoes = {};
            pendentes.forEach(function (p) {
                var venc = null, vencInfo = null;
                p.lista.forEach(function (e) {
                    var info = quandoFoiPosto(e, p.prop, hist[e.id + '|' + p.prop]);
                    var conta = !info.desdeCriacao || info.estado === 'ok' || info.estado === 'nok';
                    if (conta && !isNaN(info.t) && (!vencInfo || info.t > vencInfo.t)) { venc = e; vencInfo = info; }
                });
                if (!venc) return;
                var valor = venc.valOrig[p.prop];
                resolucaoSeq[p.cid + '|' + p.prop] = { valor: valor, origemId: venc.id };
                p.lista.forEach(function (e) {
                    if (estadoValidacao(e.valOrig[p.prop]) === estadoValidacao(valor)) return;
                    var a = alteracoes[e.id] = alteracoes[e.id] || { evt: e, dados: {} };
                    a.dados[CAMPOS_VALIDACAO_OHF[p.prop][0]] = textoValidacao(valor);
                });
            });

            // Atualizar o que está no ecrã
            if (currentArea && modoTurnos()) renderShiftCalendar();

            // 5) Gravar na lista
            var lista = Object.keys(alteracoes).map(function (k) { return alteracoes[k]; });
            if (GRAVAR_VALIDACOES_SEQUENCIA && lista.length) gravarValidacoes(lista);
        });
    }

    function gravarValidacoes(alteracoes) {
        $.when(obterDigest(), obterTipoItemOHF()).done(function (digest, tipo) {
            var i = 0, ok = 0;
            (function seguinte() {
                if (i >= alteracoes.length) {
                    console.info('Validações da sequência gravadas na lista OHF: ' + ok + ' de ' + alteracoes.length + ' registo(s).');
                    return;
                }
                var a = alteracoes[i++];
                var corpo = $.extend({ __metadata: { type: tipo } }, a.dados);
                $.ajax({
                    type: 'POST',
                    url: site + "/_api/web/lists(guid'" + listGuidOHF + "')/items(" + a.evt.id + ")",
                    data: JSON.stringify(corpo),
                    contentType: 'application/json;odata=verbose',
                    headers: { 'Accept': 'application/json;odata=verbose', 'X-RequestDigest': digest,
                               'IF-MATCH': '*', 'X-HTTP-Method': 'MERGE' }
                }).done(function () {
                    ok++;
                    Object.keys(CAMPOS_VALIDACAO_OHF).forEach(function (prop) {
                        var nome = CAMPOS_VALIDACAO_OHF[prop][0];
                        if (a.dados.hasOwnProperty(nome)) a.evt.valOrig[prop] = a.dados[nome];
                    });
                }).fail(function (x) {
                    console.warn('Não foi possível gravar as validações do registo OHF ' + a.evt.id + ':', x && x.status, x && x.responseText);
                }).always(seguinte);
            })();
        }).fail(function (x) {
            console.warn('Gravação das validações OHF não efetuada (sem permissão ou sem ligação):', x && x.responseText);
        });
    }

    carregarTodasAsListas();

    // ================= Utilitários =================

    function lerArea(value) {
        var a = value.OData__x00c1_rea || value._x005f_x00c1_rea || value._x00C1_rea || value._x00c1_rea || '';
        return String(a).trim();
    }

    function escHtml(s) {
        return String(s === undefined || s === null ? '' : s)
            .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }

    function normalizarTurno(t) {
        var s = String(t || '').trim().toLowerCase();
        if (s.indexOf('manh') === 0) return 'Manha';
        if (s.indexOf('tard') === 0) return 'Tarde';
        if (s.indexOf('noit') === 0) return 'Noite';
        return 'SemTurno';
    }

    // Turno de um ensaio a partir da hora: Manhã 06:00–14:30 | Tarde 14:30–23:00 | Noite 23:00–06:00.
    // Hora 00:00 = ensaio sem hora definida -> "Sem turno".
    function turnoPorHora(data) {
        var m = moment(data);
        var min = m.hours() * 60 + m.minutes();
        if (min === 0) return 'SemTurno';
        if (min >= 360 && min < 870) return 'Manha';
        if (min >= 870 && min < 1380) return 'Tarde';
        return 'Noite';
    }

    // Dia em que o turno aparece: a Noite que começa às 23:00 pertence ao dia seguinte
    // (mesma regra da vista: Noite → Manhã → Tarde de cada dia).
    function diaDoTurno(data) {
        var m = moment(data);
        var min = m.hours() * 60 + m.minutes();
        return (min >= 1380 ? m.clone().add(1, 'day') : m).format('YYYY-MM-DD');
    }

    function obterTurno(chave) {
        for (var i = 0; i < TURNOS.length; i++) { if (TURNOS[i].chave === chave) return TURNOS[i]; }
        return { chave: 'SemTurno', nome: 'Sem turno', horario: '', classe: 'turno-sem', icone: 'fa-question-circle-o' };
    }

    function chaveCalendario(area, cc) {
        return 'cal_' + (String(area) + '_' + String(cc)).replace(/[^A-Za-z0-9_-]/g, '_');
    }

    function eDiaUtil(dataStr) {
        return moment(dataStr, 'YYYY-MM-DD').isoWeekday() <= 5;
    }

    function tituloSemana(inicio, fim) {
        return 'Semana ' + inicio.isoWeek() + ' · ' +
            inicio.clone().locale('pt').format('D MMM') + ' – ' + fim.clone().locale('pt').format('D MMM YYYY');
    }

    function eAreaTurnos(area) {
        var a = String(area || '').trim();
        return areasTurnos.has(a) || a.toUpperCase().indexOf(PREFIXO_AREAS_TURNOS) === 0;
    }

    // Lê as opções do campo de escolha "Área" da lista OHF (resolve sempre; [] se falhar)
    function obterOpcoesAreaOHF() {
        var d = $.Deferred();
        var url = site + "/_api/web/lists(guid'" + listGuidOHF + "')/fields?$select=InternalName,Choices&$filter=" +
                  encodeURIComponent("InternalName eq '_x00c1_rea'");
        $.ajax({ type: "GET", url: url, headers: { "Accept": "application/json;odata=verbose" } })
            .done(function (data) {
                var f = (data && data.d && data.d.results && data.d.results[0]) || null;
                var ch = (f && f.Choices && f.Choices.results) ? f.Choices.results : [];
                d.resolve(ch.map(function (c) { return String(c).trim(); }).filter(Boolean));
            })
            .fail(function (xhr) { console.warn("Não foi possível ler as opções de Área da lista OHF:", xhr && xhr.responseText); d.resolve([]); });
        return d.promise();
    }

    // Lê TODAS as páginas de um pedido REST (segue "__next"). Rejeita se alguma página falhar.
    function lerTodasAsPaginas(url) {
        var d = $.Deferred();
        var resultados = [];
        (function pagina(u) {
            $.ajax({ type: "GET", url: u, headers: { "Accept": "application/json;odata=verbose" } })
                .done(function (data) {
                    var r = (data && data.d && data.d.results) ? data.d.results : [];
                    Array.prototype.push.apply(resultados, r);
                    if (data && data.d && data.d.__next) pagina(data.d.__next);
                    else d.resolve(resultados);
                })
                .fail(function (xhr) { d.reject(xhr); });
        })(url);
        return d.promise();
    }

    // Carrega os registos de uma lista a partir de DATA_MINIMA, com paginação.
    // 1.º tenta filtrar no servidor pela coluna Data (rápido; recomenda-se a coluna Data
    //    estar indexada na lista). Se o SharePoint recusar (ex: limite de 5000 itens numa
    //    coluna não indexada), 2.º lê a lista toda em páginas e filtra no browser.
    // Resolve SEMPRE (com [] em último caso) para que uma lista com problemas não impeça
    // as outras de aparecer.
    function obterLista(urlBase, nome) {
        var d = $.Deferred();
        // Um dia de margem por causa do fuso horário (o filtro fino é feito depois no browser)
        var dataFiltro = moment(DATA_MINIMA, 'YYYY-MM-DD').subtract(1, 'day').format('YYYY-MM-DD') + 'T00:00:00Z';
        var urlFiltrado = urlBase + "&$filter=" + encodeURIComponent("Data ge datetime'" + dataFiltro + "'") + "&$top=5000";
        var urlCompleto = urlBase + "&$top=5000";

        lerTodasAsPaginas(urlFiltrado)
            .done(function (r) { d.resolve(r); })
            .fail(function (xhr) {
                console.warn("Lista " + nome + ": filtro por Data recusado pelo servidor; a ler a lista completa em páginas. " +
                             "Sugestão: indexar a coluna 'Data' nesta lista.", xhr && xhr.responseText);
                lerTodasAsPaginas(urlCompleto)
                    .done(function (r) { d.resolve(r); })
                    .fail(function (xhr2) { console.error("Erro na Lista " + nome + ":", xhr2 && xhr2.responseText); d.resolve([]); });
            });
        return d.promise();
    }

    function registarAreaCC(area, cc, ignorarFiltroAreas) {
        if (!area || !cc) return;
        var areaLimpa = String(area).trim();
        var ccLimpo = String(cc).trim();

        // Filtro estrito para Produção/Ensaio: apenas OPA e OPT.
        // A lista OHF traz as suas próprias áreas, por isso ignora este filtro.
        if (!ignorarFiltroAreas && areasPermitidas.indexOf(areaLimpa) === -1) return;
        if (!ccLimpo || ccLimpo === 'undefined' || ccLimpo === 'null') return;

        if (!areaCCMap[areaLimpa]) areaCCMap[areaLimpa] = new Set();
        areaCCMap[areaLimpa].add(ccLimpo);
    }

    // ================= Carregamento =================

    function carregarTodasAsListas() {
        $.when(
            obterLista(urlProd, 'Produção'),
            obterLista(urlEnsaio, 'Ensaios'),
            obterLista(urlOHF, 'OHF | Plano Produção'),
            obterOpcoesAreaOHF(),
            obterOHFHydra(),
            obterHydra()
        ).done(function (resProd, resEnsaio, resOHF, opcoesAreaOHF, resOHFHydra, resHydra) {
            // Hydra: quantidades por turno e colunas Hydra da lista OHF
            indexarHydra(resHydra);
            var extraOHF = {};
            (resOHFHydra || []).forEach(function (x) { extraOHF[String(x.ID)] = x; });
            allEvents = [];
            areaCCMap = {};
            areasTurnos = new Set(opcoesAreaOHF);

            $.each(resProd, function (index, value) {
                if (value.Data && moment(value.Data).format('YYYY-MM-DD') >= DATA_MINIMA) {
                    var numeroPrioridade = (value.Prioridade !== null && value.Prioridade !== undefined) ? parseInt(value.Prioridade) : 999;
                    var areaBruta = lerArea(value);
                    var campoCC = String(value.CC).trim();

                    var event = {
                        tipoLista: 'Producao',
                        title: value.Title ? value.Title : 'Sem Material',
                        start: moment(value.Data).format('YYYY-MM-DD'),
                        dataOriginal: value.Data,
                        id: value.ID,
                        status: value.Status,
                        cc: campoCC,
                        sortLevel: 1,
                        prioridade: numeroPrioridade,
                        dispFerramenta: value.Disponibilidade_x0020_Ferramenta || '',
                        dispMP: value.Disponibilidade || '',
                        mpAbastecida: value.MP_x0020_Abastecida || '',
                        horasPlan: value.Horas_x0020_de_x0020_Produ_x00e7 !== undefined ? value.Horas_x0020_de_x0020_Produ_x00e7 : '',
                        mpNecessaria: value.MP_x0020__x0028_Kg_x0029_ !== undefined ? value.MP_x0020__x0028_Kg_x0029_ : '',
                        qtdPlan: value.Qtd_x0020_Planeada !== undefined ? value.Qtd_x0020_Planeada : '',
                        qtdProduzida: (value.Qtd_x0020_Produzida !== undefined && value.Qtd_x0020_Produzida !== null) ? value.Qtd_x0020_Produzida : '',
                        mpMinima: value.dz8f !== undefined ? value.dz8f : '',
                        qtdMinima: value.vs4x !== undefined ? value.vs4x : '',
                        area: areaBruta,
                        allDay: true
                    };
                    if (areaBruta && campoCC) registarAreaCC(areaBruta, campoCC, false);
                    allEvents.push(event);
                }
            });

            $.each(resEnsaio, function (index, value) {
                if (value.Data && moment(value.Data).format('YYYY-MM-DD') >= DATA_MINIMA) {
                    var campoCC = String(value.C_x002e__x0020_Custo).trim();
                    var campoQtd = value.Qtd_x002e__x0020_Ensaio;
                    var areaBruta = lerArea(value);

                    var horaTexto = moment(value.Data).format('HH:mm');
                    var displaySub = (horaTexto !== "00:00") ? 'Ensaio ' + horaTexto : 'Ensaio';

                    var event = {
                        tipoLista: 'Ensaio',
                        title: value.KA_x0020_BIP ? value.KA_x0020_BIP : 'Sem Ref',
                        start: moment(value.Data).format('YYYY-MM-DD'),
                        dataOriginal: value.Data,
                        subTitulo: displaySub,
                        id: value.ID,
                        status: 'Ensaio',
                        cc: campoCC,
                        horaEnsaio: (horaTexto !== "00:00") ? horaTexto : '',
                        // Para a vista por turnos (áreas OHF): turno e dia calculados pela hora do ensaio
                        turno: turnoPorHora(value.Data),
                        diaTurno: diaDoTurno(value.Data),
                        sortLevel: 0,
                        prioridade: 0,
                        dispFerramenta: value.Disponibilidade_x0020_da_x0020_F || '',
                        dispMP: value.MP_x0020_e_x0020_BIPS || '',
                        mpAbastecida: '',
                        qtdEnsaio: campoQtd !== undefined ? campoQtd : '',
                        area: areaBruta,
                        allDay: true
                    };
                    if (areaBruta && campoCC) registarAreaCC(areaBruta, campoCC, false);
                    allEvents.push(event);
                }
            });

            $.each(resOHF, function (index, value) {
                if (!value.Data) return;
                var dia = moment(value.Data).format('YYYY-MM-DD');
                if (dia < DATA_MINIMA) return;

                var areaBruta = lerArea(value);
                var campoCC = String(value.CC || '').trim();
                var extra = extraOHF[String(value.ID)] || {};

                allEvents.push({
                    tipoLista: 'OHF',
                    title: value.KA ? String(value.KA).trim() : 'Sem KA',
                    start: dia,
                    dataOriginal: value.Data,
                    id: value.ID,
                    cc: campoCC,
                    area: areaBruta,
                    turno: normalizarTurno(value.Turno),
                    status: value.Status || '',
                    qtdPlan: (value.Qtd_x0020_Planeada !== undefined && value.Qtd_x0020_Planeada !== null) ? value.Qtd_x0020_Planeada : '',
                    qtdProduzida: (value.Qtd_x0020_Produzida !== undefined && value.Qtd_x0020_Produzida !== null) ? value.Qtd_x0020_Produzida : '',
                    qtdTotalDia: (value.QtdTotalDia !== undefined && value.QtdTotalDia !== null) ? value.QtdTotalDia : '',
                    modificado: value.Modified || '',
                    criado: value.Created || '',
                    // Valores originais da lista (as validações mostradas podem vir da sequência)
                    valOrig: { dispFerramenta: value.DisponibilidadeFerramenta || '', dispMP: value.DisponibilidadeMP || '', mpAbastecida: value.MPAbastecida || '' },
                    dispFerramenta: value.DisponibilidadeFerramenta || '',
                    dispMP: value.DisponibilidadeMP || '',
                    mpAbastecida: value.MPAbastecida || '',
                    horasPlan: (value.Horas_x0020_Produ_x00e7__x00e3_o !== undefined && value.Horas_x0020_Produ_x00e7__x00e3_o !== null) ? value.Horas_x0020_Produ_x00e7__x00e3_o : '',
                    prioridade: (value.Prioridade !== undefined && value.Prioridade !== null && value.Prioridade !== '' && !isNaN(parseInt(value.Prioridade))) ? parseInt(value.Prioridade) : 999,
                    // Hydra (ações Infowise B1/B2/B3) e campos editados no popup
                    dataProducao: value.DataProducao || '',
                    temColunasHydra: extra.hasOwnProperty('Qtd_x0020_Hydra_x0020_turno'),
                    hydraDesde: extra.Hydra_x0020_desde || '',
                    qtdHydraLista: numOuNulo(extra.Qtd_x0020_Hydra),
                    qtdHydraFechados: numOuNulo(extra.Qtd_x0020_Hydra_x0020_fechados) || 0,
                    comentarios: String(extra.Coment_x00e1_rios || '').replace(/<[^>]*>/g, '').trim(),
                    allDay: true
                });
                aplicarHydraOHF(allEvents[allEvents.length - 1]);

                if (areaBruta && campoCC) {
                    registarAreaCC(areaBruta, campoCC, true);
                    areasTurnos.add(areaBruta);
                }
            });

            // Ensaios cuja Área é uma área OHF: entram na vista por turnos dessa área
            allEvents.forEach(function (evt) {
                if (evt.tipoLista === 'Ensaio' && evt.area && evt.cc && eAreaTurnos(evt.area)) {
                    areasTurnos.add(evt.area);
                    registarAreaCC(evt.area, evt.cc, true);
                }
            });

            renderAreaButtons();

            // Gravar na lista as validações assumidas pelas sequências (só OHF)
            try { resolverValidacoesSequencias(); } catch (errSync) { console.warn('Erro nas validações das sequências OHF:', errSync); }

            requestAnimationFrame(function () {
                // Reabrir na Área/CC de onde se saiu (vindo do formulário); senão, a primeira área
                var primeiraArea = $('#areaButtonsContainer .area-button').filter(function () {
                    return areaInicial && $(this).attr('data-area') === areaInicial;
                }).first();
                if (!primeiraArea.length) primeiraArea = $('#areaButtonsContainer .area-button').first();
                if (primeiraArea.length) {
                    primeiraArea.trigger('click');
                    if (ccInicial && ccInicial !== currentCC) {
                        $('.cc-button').filter(function () { return $(this).attr('data-cc') === ccInicial; }).first().trigger('click');
                    }
                    areaInicial = ccInicial = null;
                } else {
                    $('#ccButtonsContainer').empty();
                    $('#calToolbar').empty(); $('#graficoKA').empty();
                }
            });
        });
    }

    // ================= Botões de Área e CC =================

    function renderAreaButtons() {
        var container = $('#areaButtonsContainer');
        container.empty();

        var fragment = $(document.createDocumentFragment());
        Object.keys(areaCCMap).sort().forEach(function (area, index) {
            var btn = $('<button/>', {
                type: 'button',
                text: area,
                'class': 'btn calendar-button area-button ' + (index === 0 ? 'btn-success' : 'btn-secondary'),
                'data-area': area
            });
            fragment.append(btn);
        });
        container.append(fragment);

        container.off('click', '.area-button').on('click', '.area-button', function (e) {
            e.preventDefault();
            currentArea = String($(this).attr('data-area')).trim();

            $('.area-button').addClass('btn-secondary').removeClass('btn-success');
            $(this).addClass('btn-success').removeClass('btn-secondary');

            var ccs = renderCCButtons();
            if (ccs.length) {
                currentCC = ccs[0];
                atualizarCalendario();
            } else {
                currentCC = null;
                $('#calToolbar').empty(); $('#graficoKA').empty();
                $('#calendarsContainer > div').hide();
                $('#shiftCalendar').hide();
            }
        });
    }

    // Um CC só tem botão se tiver registos desta Área entre SEMANAS_CC_ANTES semanas antes e
    // SEMANAS_CC_DEPOIS semanas depois da semana de HOJE (dia da consulta), inclusive.
    // A janela é fixa: não muda ao navegar no calendário.
    var SEMANAS_CC_ANTES = 3;
    var SEMANAS_CC_DEPOIS = 3;
    function ccTemRegistos(area, cc) {
        var desde = moment().startOf('isoWeek').subtract(SEMANAS_CC_ANTES, 'weeks').format('YYYY-MM-DD');
        var ate = moment().endOf('isoWeek').add(SEMANAS_CC_DEPOIS, 'weeks').format('YYYY-MM-DD');
        var turnos = areasTurnos.has(area);
        return allEvents.some(function (evt) {
            if (String(evt.cc) !== String(cc)) return false;
            if (turnos) {
                if (evt.tipoLista !== 'OHF' && evt.tipoLista !== 'Ensaio') return false;
                if (String(evt.area) !== String(area)) return false;
            } else {
                if (evt.tipoLista === 'OHF') return false;
                if (evt.area && String(evt.area) !== String(area)) return false;
            }
            var dia = evt.diaTurno || evt.start;
            return dia >= desde && dia <= ate;
        });
    }

    // Se nenhum CC da área tiver registos nessa janela, mostra todos os CCs da área.
    function renderCCButtons() {
        var container = $('#ccButtonsContainer').empty();
        var todos = areaCCMap[currentArea] ? Array.from(areaCCMap[currentArea]).sort() : [];
        var ccs = todos.filter(function (cc) { return ccTemRegistos(currentArea, cc); });
        if (!ccs.length) ccs = todos;
        ccs.forEach(function (cc) {
            container.append($('<button/>', {
                type: 'button',
                text: cc,
                'class': 'btn btn-secondary calendar-button cc-button',
                'data-cc': cc
            }));
        });
        return ccs;
    }

    $(document).on('click', '.cc-button', function (event) {
        event.preventDefault();
        currentCC = String($(this).attr('data-cc')).trim();
        atualizarCalendario();
    });

    // ================= Mostrar o calendário certo =================

    function modoTurnos() {
        return areasTurnos.has(currentArea);
    }

    function calendarioAtual() {
        if (!currentArea || !currentCC) return null;
        var $cal = $('#' + chaveCalendario(currentArea, currentCC));
        return ($cal.length && $cal.data('fullCalendar')) ? $cal : null;
    }

    function atualizarCalendario() {
        if (!currentCC || !currentArea) return;

        $('.cc-button').addClass('btn-secondary').removeClass('btn-success');
        $('.cc-button').filter(function () { return $(this).attr('data-cc') === currentCC; })
            .addClass('btn-success').removeClass('btn-secondary');

        $('#calendarsContainer > div').hide();

        // Áreas da lista OHF -> vista por turnos
        // A legenda de STATUS fica sempre visível; só Engenharia/Validações e Turnos alternam.
        if (modoTurnos()) {
            $('#legendaProducao').show();
            $('#shiftCalendar').show();
            renderShiftCalendar();
            return;
        }

        $('#shiftCalendar').hide();
        $('#legendaProducao').show();

        var key = currentArea + '|' + currentCC;
        var divId = chaveCalendario(currentArea, currentCC);
        var $cal = $('#' + divId);

        if (!initializedCalendars.has(key) || !$cal.length) {
            if (!$cal.length) $cal = $('<div/>', { id: divId }).appendTo('#calendarsContainer');
            $cal.show();
            GenerateCalendar('#' + divId);
            initializedCalendars.add(key);
        } else {
            $cal.show();
            // Se o 5/7 dias foi alterado noutro calendário, sincroniza este ao mostrá-lo
            if ($cal.fullCalendar('option', 'weekends') !== mostrarFimDeSemana) {
                $cal.fullCalendar('option', 'weekends', mostrarFimDeSemana);
            }
            // Abrir na semana partilhada (pode ter mudado noutra área/CC)
            $cal.fullCalendar('gotoDate', dataParaCalendario());
            $cal.fullCalendar('refetchEvents');
        }
        atualizarToolbarFC($cal.fullCalendar('getView'));
    }

    // ================= Barra de ferramentas comum =================

    function grupoBotoes(botoes) {
        var h = '<div class="btn-group ml-2">';
        botoes.forEach(function (b) {
            h += '<button type="button" class="btn btn-sm ' + (b.ativo ? 'btn-secondary' : 'btn-outline-secondary') + '" ' + b.attr + '>' + b.texto + '</button>';
        });
        return h + '</div>';
    }

    // o = { titulo, hojeDesativado, contagem, vistas (bool), vistaAtual }
    function renderToolbar(o) {
        var h = '<div class="cal-toolbar">';
        h += '<div class="cal-toolbar-lado">';
        h +=   '<div class="btn-group">';
        h +=     '<button type="button" class="btn btn-secondary btn-sm" data-nav="prev" title="Anterior"><i class="fa fa-chevron-left"></i></button>';
        h +=     '<button type="button" class="btn btn-secondary btn-sm" data-nav="next" title="Seguinte"><i class="fa fa-chevron-right"></i></button>';
        h +=   '</div>';
        h +=   '<button type="button" class="btn btn-outline-secondary btn-sm ml-2" data-nav="today"' + (o.hojeDesativado ? ' disabled' : '') + '>Hoje</button>';
        h += '</div>';
        h += '<div class="cal-titulo">' + escHtml(o.titulo) + '</div>';
        h += '<div class="cal-toolbar-lado cal-toolbar-dir">';
        h +=   '<span class="cal-contagem">' + o.contagem + ' registo(s)</span>';
        h +=   grupoBotoes([
                   { attr: 'data-dias="5"', texto: '5 dias', ativo: !mostrarFimDeSemana },
                   { attr: 'data-dias="7"', texto: '7 dias', ativo: mostrarFimDeSemana }
               ]);
        if (o.vistas) {
            h += grupoBotoes([
                   { attr: 'data-vista="month"', texto: 'Mês', ativo: o.vistaAtual === 'month' },
                   { attr: 'data-vista="basicWeek"', texto: 'Semana', ativo: o.vistaAtual !== 'month' }
               ]);
        }
        h += '</div></div>';
        $('#calToolbar').html(h);
        agendarGraficoKA();
    }

    function eventosFC() {
        return allEvents.filter(function (evt) {
            if (evt.tipoLista === 'OHF') return false;
            var matchCC = String(evt.cc) === String(currentCC);
            var matchArea = !evt.area || String(evt.area) === String(currentArea);
            return matchCC && matchArea;
        });
    }

    function atualizarToolbarFC(view) {
        if (!view || modoTurnos()) return;
        var inicio = moment(view.intervalStart.format('YYYY-MM-DD'), 'YYYY-MM-DD');
        var fimExcl = moment(view.intervalEnd.format('YYYY-MM-DD'), 'YYYY-MM-DD');
        var iS = inicio.format('YYYY-MM-DD');
        var fS = fimExcl.format('YYYY-MM-DD');

        var titulo;
        if (view.name === 'month') {
            var t = inicio.clone().locale('pt').format('MMMM YYYY');
            titulo = t.charAt(0).toUpperCase() + t.slice(1);
        } else {
            var fim = mostrarFimDeSemana ? fimExcl.clone().subtract(1, 'day') : inicio.clone().add(4, 'days');
            titulo = tituloSemana(inicio, fim);
        }

        var hojeStr = moment().format('YYYY-MM-DD');
        var contagem = eventosFC().filter(function (e) {
            return e.start >= iS && e.start < fS && (mostrarFimDeSemana || eDiaUtil(e.start));
        }).length;

        renderToolbar({
            titulo: titulo,
            hojeDesativado: hojeStr >= iS && hojeStr < fS,
            contagem: contagem,
            vistas: true,
            vistaAtual: view.name
        });
    }

    // Eventos da barra (delegados, ligados uma única vez)
    $('#calToolbar').on('click', '[data-nav]', function (e) {
        e.preventDefault();
        var nav = $(this).attr('data-nav');
        if (modoTurnos()) {
            if (nav === 'prev') dataReferencia = dataReferencia.clone().subtract(1, 'week');
            else if (nav === 'next') dataReferencia = dataReferencia.clone().add(1, 'week');
            else dataReferencia = moment().startOf('isoWeek');
            renderShiftCalendar();
        } else {
            var $cal = calendarioAtual();
            if ($cal) {
                $cal.fullCalendar(nav);   // 'prev' | 'next' | 'today'
                atualizarToolbarFC($cal.fullCalendar('getView'));
            }
        }
    });

    $('#calToolbar').on('click', '[data-dias]', function (e) {
        e.preventDefault();
        definirDias($(this).attr('data-dias') === '7');
    });

    $('#calToolbar').on('click', '[data-vista]', function (e) {
        e.preventDefault();
        var $cal = calendarioAtual();
        if ($cal) {
            $cal.fullCalendar('changeView', $(this).attr('data-vista'));
            atualizarToolbarFC($cal.fullCalendar('getView'));
        }
    });

    // ================= Semana partilhada =================

    // Data a passar ao FullCalendar: a quinta-feira da semana de referência, para que na
    // vista de Mês se abra o mês a que essa semana pertence (regra ISO).
    function dataParaCalendario() {
        return dataReferencia.clone().add(3, 'days');
    }

    // Atualiza a semana partilhada a partir da vista visível do FullCalendar
    function guardarDataDaVista(view) {
        var ini = moment(view.intervalStart.format('YYYY-MM-DD'), 'YYYY-MM-DD');
        var fim = moment(view.intervalEnd.format('YYYY-MM-DD'), 'YYYY-MM-DD');
        if (view.name === 'month') {
            // Mantém a semana escolhida se ainda pertencer a este mês; senão, 1.ª semana do mês
            var quinta = dataReferencia.clone().add(3, 'days');
            if (quinta.isBefore(ini, 'day') || !quinta.isBefore(fim, 'day')) {
                dataReferencia = ini.clone().add(3, 'days').startOf('isoWeek');
            }
        } else {
            dataReferencia = ini.clone().startOf('isoWeek');
        }
    }

    // ================= Alternar 5 / 7 dias =================

    function definirDias(seteDias) {
        mostrarFimDeSemana = seteDias;
        if (modoTurnos()) {
            renderShiftCalendar();
        } else {
            var $cal = calendarioAtual();
            if ($cal) {
                $cal.fullCalendar('option', 'weekends', seteDias);
                atualizarToolbarFC($cal.fullCalendar('getView'));
            }
        }
    }

    // ================= Vista semanal por TURNOS (OHF) =================

    // Ordem dentro de cada turno:
    //   1.º o(s) registo(s) com o MESMO KA do último registo de produção do turno anterior
    //       (ordem cronológica Noite → Manhã → Tarde → Noite do dia seguinte…), para mostrar a
    //       continuidade do que já estava a correr;
    //   2.º os restantes por Prioridade (1, 2, 3…; sem prioridade no fim) e depois por KA.
    // Turnos vazios são saltados (conta o último KA produzido). É calculado sobre TODOS os
    // registos carregados deste CC, por isso funciona também entre semanas (ex: Sex → Seg).
    function chaveKA(t) { return String(t || '').trim().toUpperCase(); }

    function agruparTurnosOrdenados(area, cc) {
        var ordemTurno = {};
        TURNOS.forEach(function (t, i) { ordemTurno[t.chave] = i; });

        var grupos = {};
        allEvents.forEach(function (evt) {
            if ((evt.tipoLista !== 'OHF' && evt.tipoLista !== 'Ensaio') ||
                String(evt.cc) !== String(cc) || String(evt.area) !== String(area)) return;
            var k = (evt.diaTurno || evt.start) + '|' + evt.turno;
            (grupos[k] = grupos[k] || []).push(evt);
        });

        var porPrioridade = function (a, b) {
            return (a.prioridade - b.prioridade) || String(a.title).localeCompare(String(b.title));
        };

        // Chaves em ordem cronológica (Sem turno fica de fora da cadeia)
        var chaves = Object.keys(grupos).sort(function (a, b) {
            var pa = a.split('|'), pb = b.split('|');
            if (pa[0] !== pb[0]) return pa[0] < pb[0] ? -1 : 1;
            var ia = (pa[1] in ordemTurno) ? ordemTurno[pa[1]] : 99;
            var ib = (pb[1] in ordemTurno) ? ordemTurno[pb[1]] : 99;
            return ia - ib;
        });

        var ultimoKA = null;
        var ultimaCadeia = null;   // cadeia do último registo de produção (para continuar no turno seguinte)
        var cadeias = {};          // id -> lista de registos da mesma sequência
        chaves.forEach(function (k) {
            var lista = grupos[k];
            if (k.split('|')[1] === 'SemTurno') { lista.sort(porPrioridade); return; }

            var continua = ultimoKA ? lista.filter(function (e) { return e.tipoLista === 'OHF' && chaveKA(e.title) === ultimoKA; }) : [];
            var resto = lista.filter(function (e) { return continua.indexOf(e) === -1; }).sort(porPrioridade);
            continua.sort(porPrioridade);
            continua.forEach(function (e) { e.continuaTurnoAnterior = true; e.cadeiaId = ultimaCadeia; });
            resto.forEach(function (e) { e.continuaTurnoAnterior = false; e.cadeiaId = e.tipoLista + '-' + e.id; });
            grupos[k] = continua.concat(resto);
            grupos[k].forEach(function (e) {
                if (e.tipoLista === 'OHF') (cadeias[e.cadeiaId] = cadeias[e.cadeiaId] || []).push(e);
            });

            // Último registo de PRODUÇÃO deste turno passa para o turno seguinte
            var producao = grupos[k].filter(function (e) { return e.tipoLista === 'OHF'; });
            if (producao.length) {
                var ult = producao[producao.length - 1];
                ultimoKA = chaveKA(ult.title);
                ultimaCadeia = ult.cadeiaId;
            }
        });

        // Quantidade total de cada sequência (só interessa quando tem 2 ou mais registos)
        Object.keys(cadeias).forEach(function (id) {
            var lista = cadeias[id];
            var total = lista.reduce(function (acc, e) {
                var n = parseFloat(e.qtdPlan);
                return acc + (isNaN(n) ? 0 : n);
            }, 0);
            // Produzido da sequência = soma da Qtd Produzida dos turnos (ou do Hydra, enquanto provisória)
            var diasSeq = [];
            lista.forEach(function (e) { var d = e.diaTurno || e.start; if (diasSeq.indexOf(d) === -1) diasSeq.push(d); });
            var totalProd = 0, provSeq = false;
            lista.forEach(function (e) {
                var ef = qtdProduzidaEfetiva(e);
                if (!ef) return;
                totalProd += ef.v;
                provSeq = provSeq || ef.hydra;
            });
            lista.forEach(function (e) {
                e.cadeiaN = lista.length; e.cadeiaDias = diasSeq.length; e.cadeiaTotal = total;
                e.cadeiaProduzida = totalProd; e.cadeiaProv = provSeq;
            });

            // Validações partilhadas: a última ALTERAÇÃO feita a uma validação (OK, NOK ou Pendente)
            // em qualquer registo da sequência vale para todos. Quem é a última é decidido por
            // resolverValidacoesSequencias() a partir do histórico de versões do campo; enquanto
            // não houver resolução, cada registo mostra o seu próprio valor.
            ['dispFerramenta', 'dispMP', 'mpAbastecida'].forEach(function (campo) {
                var res = (lista.length > 1) ? resolucaoSeq[id + '|' + campo] : null;
                lista.forEach(function (e) {
                    var orig = e.valOrig ? e.valOrig[campo] : e[campo];
                    e.herdado = e.herdado || {};
                    if (res) {
                        e[campo] = res.valor;
                        e.herdado[campo] = String(res.origemId) !== String(e.id) && estadoValidacao(orig) !== estadoValidacao(res.valor);
                    } else {
                        e[campo] = orig;
                        e.herdado[campo] = false;
                    }
                });
            });
        });
        return grupos;
    }

    function renderShiftCalendar() {
        var inicio = dataReferencia.clone().startOf('isoWeek');
        var nDias = mostrarFimDeSemana ? 7 : 5;
        var dias = [];
        for (var i = 0; i < nDias; i++) dias.push(inicio.clone().add(i, 'days'));
        var fim = dias[dias.length - 1];
        var inicioStr = inicio.format('YYYY-MM-DD');
        var fimStr = fim.format('YYYY-MM-DD');

        var eventos = allEvents.filter(function (evt) {
            var dia = evt.diaTurno || evt.start;
            return (evt.tipoLista === 'OHF' || evt.tipoLista === 'Ensaio')
                && String(evt.cc) === String(currentCC)
                && String(evt.area) === String(currentArea)
                && dia >= inicioStr && dia <= fimStr;
        });

        // Agrupar por dia + turno, já ordenado com a continuidade de KA entre turnos
        var mapa = agruparTurnosOrdenados(currentArea, currentCC);
        var temSemTurno = eventos.some(function (evt) { return evt.turno === 'SemTurno'; });

        var linhas = TURNOS.slice();
        if (temSemTurno) linhas.push(obterTurno('SemTurno'));

        var hoje = moment().format('YYYY-MM-DD');

        renderToolbar({
            titulo: tituloSemana(inicio, fim),
            hojeDesativado: moment().startOf('isoWeek').isSame(inicio, 'day'),
            contagem: eventos.length,
            vistas: false
        });

        var html = '<table class="turnos-grid"><thead><tr><th class="turno-col-label">Turno</th>';
        dias.forEach(function (d) {
            var ds = d.format('YYYY-MM-DD');
            html += '<th class="' + (ds === hoje ? 'hoje' : '') + '">' + escHtml(d.clone().locale('pt').format('ddd DD/MM')) + '</th>';
        });
        html += '</tr></thead><tbody>';

        linhas.forEach(function (t) {
            html += '<tr>';
            html += '<th class="turno-label ' + t.classe + '"><span class="turno-nome">' +
                    (t.icone ? '<i class="fa ' + t.icone + ' turno-icone"></i>' : '') + escHtml(t.nome) + '</span>' +
                    (t.horario ? '<span class="turno-horas">' + escHtml(t.horario) + '</span>' : '') + '</th>';
            dias.forEach(function (d) {
                var ds = d.format('YYYY-MM-DD');
                var lista = mapa[ds + '|' + t.chave] || [];
                html += '<td class="turno-celula ' + t.classe + (ds === hoje ? ' hoje' : '') + '">';
                lista.forEach(function (evt) {
                    html += '<div class="' + classeCartao(evt) + ' turno-evento" data-tipo="' + evt.tipoLista + '" data-id="' + escHtml(evt.id) + '" title="Ver detalhes">' + cartaoInnerHtml(evt) + '</div>';
                });
                html += '</td>';
            });
            html += '</tr>';
        });
        html += '</tbody></table>';

        $('#shiftCalendar').html(html);
        ajustarKA($('#shiftCalendar'));
    }

    $('#shiftCalendar').on('click', '.turno-evento', function () {
        var id = String($(this).attr('data-id'));
        var tipo = $(this).attr('data-tipo');
        var evt = allEvents.filter(function (x) { return x.tipoLista === tipo && String(x.id) === id; })[0];
        if (evt) abrirModalDetalhes(evt);
    });

    // ================= Helpers de apresentação =================

    function getStatusIconHtml(value, sizeClass) {
        if (!value) return '';
        var cleanValue = value.replace(/<[^>]*>/g, "").trim();
        var iconUrl = '';
        if (cleanValue === 'OK' || cleanValue === 'Sim') { iconUrl = '/_layouts/images/kpidefaultlarge-0.gif'; }
        else if (cleanValue === 'NOK' || cleanValue === 'Não') { iconUrl = '/_layouts/images/kpidefaultlarge-2.gif'; }
        else if (cleanValue === 'Pendente') { iconUrl = '/_layouts/images/kpidefaultlarge-1.gif'; }

        if (iconUrl !== '') {
            var sizeStyle = sizeClass ? 'width:13px;height:13px;' : '';
            return ' ' + '<img src="' + iconUrl + '" class="infowise-icon" style="' + sizeStyle + '" alt="' + cleanValue + '" />';
        }
        return cleanValue;
    }

    // Falta Produzir = Planeada - Produzida (nunca negativo; se produziu a mais, mostra o excedente)
    function faltaHtml(planeada, produzida) {
        var p = parseFloat(planeada), q = parseFloat(produzida);
        if (isNaN(p)) return '-';
        if (isNaN(q)) q = 0;
        var falta = p - q;
        if (falta > 0) return '<span style="color:#b00000;">' + escHtml(formatNumeric(falta, 'pçs')) + '</span>';
        if (falta === 0) return '<span style="color:#176e17;">0 pçs</span>';
        return '<span style="color:#176e17;">0 pçs</span> <small style="color:#666;font-weight:600;">(+' + escHtml(formatNumeric(-falta, '')) + ')</small>';
    }

    function formatNumeric(val, unit) {
        if(val === undefined || val === null || val === '') return '-';
        var num = parseFloat(val);
        if(isNaN(num)) return val;
        return num.toLocaleString('pt-PT') + (unit ? ' ' + unit : '');
    }

    // ================= Cartões (iguais em todas as áreas) =================

    // Status -> classe CSS (cor da faixa e do rótulo). Comparação sem maiúsculas/minúsculas.
    var STATUS_CLASSES = {
        'planeado': 'st-planeado',
        'preparada': 'st-preparada',
        'em curso': 'st-emcurso',
        'produzido': 'st-produzido',
        'interrompido': 'st-interrompido'
    };

    function classeStatus(status) {
        var k = String(status || '').replace(/<[^>]*>/g, '').trim().toLowerCase();
        return STATUS_CLASSES[k] || 'st-planeado';
    }

    function estadoValidacao(value) {
        var v = String(value || '').replace(/<[^>]*>/g, '').trim();
        if (v === 'OK' || v === 'Sim') return 'ok';
        if (v === 'NOK' || v === 'Não') return 'nok';
        if (v === 'Pendente') return 'pend';
        return 'na';
    }

    var ICONE_VALIDACAO = { ok: 'fa-check', nok: 'fa-times', pend: 'fa-clock-o', na: 'fa-minus' };

    function chipHtml(rotulo, value) {
        var e = estadoValidacao(value);
        return '<span class="pp-chip ' + e + '"><i class="fa ' + ICONE_VALIDACAO[e] + '"></i>' + escHtml(rotulo) + '</span>';
    }

    // Número sem unidade, formatado pt-PT; '' se vazio
    function num(val) {
        if (val === undefined || val === null || val === '') return '';
        var n = parseFloat(val);
        return isNaN(n) ? escHtml(val) : n.toLocaleString('pt-PT');
    }

    function metricasHtml(partes) {
        var p = partes.filter(function (x) { return x.v !== ''; })
                      .map(function (x) { return '<b>' + x.v + '</b> ' + x.u; });
        return p.length ? '<div class="pp-metrics">' + p.join(' · ') + '</div>' : '';
    }

    function statusHtml(status) {
        var s = String(status || '').replace(/<[^>]*>/g, '').trim() || 'Planeado';
        return '<span class="pp-status"><i></i>' + escHtml(s) + '</span>';
    }

    // Classe do cartão (para o elemento exterior)
    function temPrioridade(evt) {
        return (evt.tipoLista === 'Producao' || evt.tipoLista === 'OHF') && evt.prioridade !== 999 && !isNaN(evt.prioridade);
    }

    function classeCartao(evt) {
        return 'pp-card ' + (evt.tipoLista === 'Ensaio' ? 'st-ensaio' : classeStatus(evt.status)) + (temPrioridade(evt) ? ' com-prio' : '');
    }

    // Conteúdo interior do cartão
    function cartaoInnerHtml(evt) {
        var h = '<div class="pp-top' + (evt.tipoLista === 'Ensaio' ? ' com-icone' : '') + '"><div class="pp-ka">' +
                (evt.continuaTurnoAnterior ? '<i class="fa fa-level-up fa-rotate-90 pp-continua" title="Continua do turno anterior"></i>' : '') +
                escHtml(evt.title) + '</div>';
        if (evt.tipoLista === 'Ensaio') {
            h += '<i class="fa fa-flask pp-icone-ensaio" title="Ensaio de Ferramenta' + (evt.horaEnsaio ? ' · ' + escHtml(evt.horaEnsaio) : '') + '"></i>';
        }
        if (temPrioridade(evt)) {
            h += '<div class="pp-prio">' + escHtml(evt.prioridade) + '</div>';
        }
        h += '</div>';

        if (evt.tipoLista === 'Ensaio') {
            h += '<div class="pp-chips">' + chipHtml('Ferramenta', evt.dispFerramenta) + chipHtml('Matéria-Prima + BIPS', evt.dispMP) + '</div>';
            h += metricasHtml([{ v: num(evt.qtdEnsaio), u: 'pçs ensaio' }]);
        }
        else if (evt.tipoLista === 'Producao') {
            h += '<div class="pp-chips">' + chipHtml('Ferramenta', evt.dispFerramenta) + chipHtml('Matéria-Prima', evt.dispMP) + chipHtml('Abastecimento', evt.mpAbastecida) + '</div>';
            h += metricasHtml([{ v: num(evt.qtdPlan), u: 'pçs' }, { v: num(evt.horasPlan), u: 'h' }]);
        }
        else { // OHF
            var vals = validacoesOHF(evt.area);
            var chips = '';
            if (vals.indexOf('ferramenta') !== -1) chips += chipHtml('Ferramenta', evt.dispFerramenta);
            if (vals.indexOf('mp') !== -1)         chips += chipHtml('Matéria-Prima', evt.dispMP);
            if (vals.indexOf('abast') !== -1)      chips += chipHtml('Abastecimento', evt.mpAbastecida);
            if (chips) h += '<div class="pp-chips">' + chips + '</div>';
            // Produzido / planeado; com marca roxa enquanto o valor é do Hydra (provisório)
            var ef = qtdProduzidaEfetiva(evt);
            h += metricasHtml([
                { v: ef ? num(ef.v) + ' / ' + num(evt.qtdPlan) : num(evt.qtdPlan),
                  u: 'pçs' + (ef && ef.hydra ? ' <span class="pp-hydra-dot" title="Do Hydra (provisório) · ' + escHtml(textoHydraAte()) + '"></span>' : '') },
                { v: num(evt.horasPlan), u: 'h' }
            ]);
        }
        return h;
    }

    // ================= Gráfico Planeado vs Produzido (acumulado da semana, por KA) =================
    // Usa a Área, o CC e a semana mostrados no calendário, com 5 ou 7 dias conforme o filtro.
    // Áreas OHF: Qtd Planeada e Qtd Produzida da lista OHF. OPA/OPT: só há Qtd Planeada.
    var kaGrafico = 'Todos';
    var GK = { plan: '#6f6e69', prod: '#2a78d6', grid: '#e6e5e0', txt: '#52514e', muted: '#8a8984' };

    function gkNum(n) { return Math.round(n).toLocaleString('pt-PT').replace(/ /g, ' '); }

    // % = produzido acumulado / planeado acumulado (até esse dia)
    //   verde:    ≥ 90% e < 110%  (No plano)
    //   amarelo:  ≥ 80% e < 90%   (Ligeiro atraso)
    //   vermelho: < 80% (Atrasado)
    //   tijolo:   ≥ 110% (Acima do plano: sobreprodução, também é desvio mas de outra natureza)
    var GK_CORES = { ok: '#1fa84a', warn: '#d98a00', bad: '#e02424', over: '#8f3412' };
    function gkEstado(produzido, planeado) {
        if (!planeado) return produzido > 0 ? { cls: 'over', txt: 'Acima do plano (sem planeado)', pct: null } : null;
        var r = produzido / planeado, pct = Math.round(100 * r);
        if (r >= 1.1) return { cls: 'over', txt: 'Acima do plano', pct: pct };
        if (r >= 0.9) return { cls: 'ok', txt: 'No plano', pct: pct };
        if (r >= 0.8) return { cls: 'warn', txt: 'Ligeiro atraso', pct: pct };
        return { cls: 'bad', txt: 'Atrasado', pct: pct };
    }

    // Produção real de um KA num dia, a partir dos registos (turnos) desse dia.
    //  - QtdTotalDia é o valor real do dia (pode vir repetido em vários turnos: usa-se o maior, sem somar).
    //  - Se ainda ninguém preencheu QtdTotalDia, usa-se provisoriamente a soma da Qtd Produzida dos turnos.
    function agregarDiaKA(regs) {
        var r = { plan: 0, prod: 0, somaTurnos: 0, prov: false, conflito: false, temTotal: false, valores: [] };
        regs.forEach(function (e) {
            var ef = qtdProduzidaEfetiva(e);
            var p = parseFloat(e.qtdPlan), q = ef ? ef.v : NaN, t = parseFloat(e.qtdTotalDia);
            if (!isNaN(p)) r.plan += p;
            if (!isNaN(q)) r.somaTurnos += q;
            if (!isNaN(t) && r.valores.indexOf(t) === -1) r.valores.push(t);
        });
        // OPA/OPT (lista Plano de Produção): não há turnos nem QtdTotalDia; o produzido é a soma da Qtd Produzida
        if (regs.length && regs[0].tipoLista === 'Producao') { r.prod = r.somaTurnos; r.temTotal = true; return r; }
        if (r.valores.length) {
            r.temTotal = true;
            r.prod = Math.max.apply(null, r.valores);
            r.conflito = r.valores.length > 1;
        } else {
            // Sem Qtd Total Dia (chega com a ação diária): o Total do dia no Hydra
            var e0 = regs[0];
            var hy = e0 ? qtdHydraDe(e0.cc, e0.title, e0.diaTurno || e0.start, 'Total') : null;
            if (hy !== null) {
                r.temTotal = true;
                r.hydra = true;
                r.prod = hy;
            } else {
                r.prod = r.somaTurnos;
                r.prov = r.somaTurnos > 0;
            }
        }
        return r;
    }

    // Dia em que um registo OHF foi (ou está a ser) produzido: o do Hydra, senão a Data Produção,
    // senão o dia planeado
    function diaRealOHF(e) {
        if (e.hydraDesde) return turnoReal(e.hydraDesde).dia;
        if (e.dataProducao) return moment(e.dataProducao).format('YYYY-MM-DD');
        return e.diaTurno || e.start;
    }

    /* Produção real de um KA num dia (pela data em que foi produzido, não pela planeada):
       1. o Total do dia no Hydra (dias recentes; inclui produção sem registo em curso);
       2. senão, a Qtd Total Dia dos registos produzidos nesse dia (a ação diária procura-a
          pela Data Produção; serve para os dias que já saíram do Hydra);
       3. senão, a soma da Qtd Produzida dos registos produzidos nesse dia. */
    function produzidoDiaKA(regsKA, dia) {
        var r = { prod: 0, prov: false, conflito: false };
        var hy = regsKA.length ? qtdHydraDe(regsKA[0].cc, regsKA[0].title, dia, 'Total') : null;
        if (hy !== null) {
            r.prod = hy;
            return r;
        }
        var valores = [];
        regsKA.forEach(function (e) {
            var diaTotal = e.dataProducao ? moment(e.dataProducao).format('YYYY-MM-DD') : (e.diaTurno || e.start);
            if (diaTotal !== dia) return;
            var t = parseFloat(e.qtdTotalDia);
            if (!isNaN(t) && valores.indexOf(t) === -1) valores.push(t);
        });
        if (valores.length) {
            r.prod = Math.max.apply(null, valores);
            r.conflito = valores.length > 1;
            return r;
        }
        regsKA.forEach(function (e) {
            if (diaRealOHF(e) !== dia) return;
            var ef = qtdProduzidaEfetiva(e);
            if (!ef) return;
            r.prod += ef.v;
            r.prov = true;
        });
        return r;
    }

    function registosDiaKA(area, cc, ka, dia) {
        return allEvents.filter(function (e) {
            return e.tipoLista === 'OHF' && String(e.area) === String(area) && String(e.cc) === String(cc) &&
                   String(e.title || '').trim() === String(ka || '').trim() && (e.diaTurno || e.start) === dia;
        });
    }

    function dadosGraficoKA() {
        var inicio = dataReferencia.clone().startOf('isoWeek');
        var n = mostrarFimDeSemana ? 7 : 5;
        var dias = [];
        for (var i = 0; i < n; i++) dias.push(inicio.clone().add(i, 'days'));
        var iniStr = dias[0].format('YYYY-MM-DD'), fimStr = dias[n - 1].format('YYYY-MM-DD');
        var turnos = modoTurnos();
        var temProd = true;   // OHF: QtdTotalDia · OPA/OPT: Qtd Produzida

        var registos = allEvents.filter(function (e) {
            if (String(e.cc) !== String(currentCC)) return false;
            if (turnos) { if (e.tipoLista !== 'OHF' || String(e.area) !== String(currentArea)) return false; }
            else { if (e.tipoLista !== 'Producao' || (e.area && String(e.area) !== String(currentArea))) return false; }
            var d = e.diaTurno || e.start;
            return d >= iniStr && d <= fimStr;
        });

        // Agrupa por KA e por dia; o produzido do dia vem de QtdTotalDia (ver agregarDiaKA)
        var zeros = function (v) { return dias.map(function () { return v; }); };
        var grupos = {};
        registos.forEach(function (e) {
            var idx = moment(e.diaTurno || e.start, 'YYYY-MM-DD').diff(dias[0], 'days');
            if (idx < 0 || idx >= n) return;
            var k = String(e.title || '').trim();
            var g = grupos[k] = grupos[k] || dias.map(function () { return []; });
            g[idx].push(e);
        });
        // OHF: o produzido vai para o dia em que foi mesmo produzido. Entram também os KAs
        // planeados noutra semana mas produzidos nesta.
        if (turnos) {
            var regsArea = allEvents.filter(function (e) {
                return e.tipoLista === 'OHF' && String(e.cc) === String(currentCC) && String(e.area) === String(currentArea);
            });
            var porKA = {};
            regsArea.forEach(function (e) {
                var k = String(e.title || '').trim();
                (porKA[k] = porKA[k] || []).push(e);
                var dr = diaRealOHF(e);
                if (!grupos[k] && dr >= iniStr && dr <= fimStr && qtdProduzidaEfetiva(e)) grupos[k] = dias.map(function () { return []; });
            });
            var listaOHF = Object.keys(grupos).sort().map(function (k) {
                var o = { ka: k, plan: zeros(0), prod: zeros(0), prov: zeros(false), conflito: zeros(false) };
                grupos[k].forEach(function (regs, i) {
                    regs.forEach(function (e) { var p = parseFloat(e.qtdPlan); if (!isNaN(p)) o.plan[i] += p; });
                });
                dias.forEach(function (d, i) {
                    var a = produzidoDiaKA(porKA[k] || [], d.format('YYYY-MM-DD'));
                    o.prod[i] = a.prod; o.prov[i] = a.prov; o.conflito[i] = a.conflito;
                });
                return o;
            });
        }
        var lista = turnos ? listaOHF : Object.keys(grupos).sort().map(function (k) {
            var o = { ka: k, plan: zeros(0), prod: zeros(0), prov: zeros(false), conflito: zeros(false) };
            grupos[k].forEach(function (regs, i) {
                if (!regs.length) return;
                var a = agregarDiaKA(regs);
                o.plan[i] = a.plan;
                if (temProd) { o.prod[i] = a.prod; o.prov[i] = a.prov; o.conflito[i] = a.conflito; }
            });
            return o;
        });

        // Dia de hoje dentro da semana: o produzido só se mostra até hoje
        var hojeStr = moment().format('YYYY-MM-DD');
        var hoje = hojeStr < iniStr ? -1 : (hojeStr > fimStr ? n - 1 : moment(hojeStr, 'YYYY-MM-DD').diff(dias[0], 'days'));
        var marcaHoje = (hojeStr >= iniStr && hojeStr <= fimStr) ? hoje : -1;

        var total = { ka: 'Todos', plan: zeros(0), prod: zeros(0), prov: zeros(false), conflito: zeros(false) };
        lista.forEach(function (o) {
            o.plan.forEach(function (v, i) {
                total.plan[i] += v; total.prod[i] += o.prod[i];
                total.prov[i] = total.prov[i] || o.prov[i];
                total.conflito[i] = total.conflito[i] || o.conflito[i];
            });
        });
        [total].concat(lista).forEach(function (o) {
            var a = 0, b = 0, c = false;
            o.pa = o.plan.map(function (v) { return a += v; });
            o.ra = o.prod.map(function (v) { return b += v; });
            o.provAc = o.prov.map(function (v) { return c = c || v; });   // acumulado inclui algum valor provisório
        });
        return { dias: dias, lista: lista, total: total, hoje: hoje, marcaHoje: marcaHoje, temProd: temProd };
    }

    // Redesenha depois de o calendário terminar de desenhar (para medir as colunas certas)
    var temporizadorGrafico = null;
    function agendarGraficoKA() {
        clearTimeout(temporizadorGrafico);
        temporizadorGrafico = setTimeout(renderGraficoKA, 0);
    }

    // Posição das colunas dos dias no calendário visível, relativa ao elemento $ref
    function colunasCalendario($ref, n) {
        var $ths = modoTurnos()
            ? $('#shiftCalendar .turnos-grid thead th').slice(1)
            : (calendarioAtual() ? calendarioAtual().find('.fc-head .fc-day-header:visible') : $());
        var base = $ref[0].getBoundingClientRect().left, cols = [];
        $ths.slice(0, n).each(function () {
            var r = this.getBoundingClientRect();
            cols.push({ l: r.left - base, w: r.width });
        });
        if (cols.length !== n || !cols[0].w) {                     // sem calendário visível: divisão igual
            var W = $ref.width(), l0 = 70, w = (W - l0) / n;
            cols = [];
            for (var i = 0; i < n; i++) cols.push({ l: l0 + i * w, w: w });
        }
        return cols;
    }

    function renderGraficoKA() {
        var $box = $('#graficoKA');
        if (!currentArea || !currentCC) { $box.empty(); return; }
        var D = dadosGraficoKA();
        if (kaGrafico !== 'Todos' && !D.lista.some(function (o) { return o.ka === kaGrafico; })) kaGrafico = 'Todos';
        var sel = kaGrafico === 'Todos' ? D.total : D.lista.filter(function (o) { return o.ka === kaGrafico; })[0];
        var n = D.dias.length;
        var semana = 'Semana ' + D.dias[0].isoWeek() + ' · ' + D.dias[0].clone().locale('pt').format('D MMM') + ' – ' + D.dias[n - 1].clone().locale('pt').format('D MMM');

        var h = '<div class="gk"><div class="gk-cab"><div>';
        h += '<div class="gk-titulo">Planeado vs Produzido acumulado</div>';
        h += '<div class="gk-sub">Área <b>' + escHtml(currentArea) + '</b> · CC <b>' + escHtml(currentCC) + '</b> · ' + escHtml(semana) +
             '</div>';

        if (!D.lista.length) {
            $box.html(h + '</div></div><div class="gk-vazio">Sem registos de produção para este CC nesta semana.</div></div>');
            return;
        }
        h += '<div class="gk-chips">';
        ['Todos'].concat(D.lista.map(function (o) { return o.ka; })).forEach(function (k) {
            h += '<span class="gk-chip' + (k === kaGrafico ? ' on' : '') + '" data-ka="' + escHtml(k) + '">' + escHtml(k) + '</span>';
        });
        h += '</div></div></div>';
        var leg = '<div class="gk-legenda"><div class="gk-leg-sec">Gráfico</div><span><i class="gk-sw-dash"></i>Planeado acumulado</span>' +
             (D.temProd ? '<span><i class="gk-sw-line"></i>Produzido acumulado</span><span><i class="gk-sw-bar"></i>Produzido no dia</span>' : '') +
             (D.marcaHoje >= 0 ? '<span><i class="gk-sw-hoje"></i>Hoje</span>' : '') + '</div>';
        h += '<div class="gk-corpo"><div class="gk-graf"></div>' + leg + '<div class="gk-tab"></div></div></div>';
        $box.html(h);

        var $graf = $box.find('.gk-graf');
        var cols = colunasCalendario($graf, n);
        var xFim = cols[n - 1].l + cols[n - 1].w;
        $box.find('.gk-legenda').css({ left: xFim + 20, width: Math.max(120, $graf.width() - xFim - 24) });
        desenharGraficoKA($graf, D, sel, cols);
        $box.find('.gk-tab').html(tabelaGraficoKA(D, sel, cols, $graf.width()));
    }

    function desenharGraficoKA($alvo, D, o, cols) {
        var W = Math.floor(cols[cols.length - 1].l + cols[cols.length - 1].w + 2), H = 280;
        var m = { t: 24, b: 30 };
        var n = D.dias.length;
        var ateHoje = D.temProd ? D.hoje : -1;
        var max = Math.max.apply(null, o.pa.concat(o.ra.slice(0, ateHoje + 1)).concat([1])) * 1.15;
        var X = function (i) { return cols[i].l + cols[i].w / 2; };
        var Y = function (v) { return m.t + (H - m.t - m.b) * (1 - v / max); };
        var xIni = cols[0].l, xFim = cols[n - 1].l + cols[n - 1].w;
        var eixoFora = xIni >= 44;                                  // há espaço à esquerda (vista por turnos)
        var p10 = Math.pow(10, Math.floor(Math.log(max) / Math.LN10));
        var passo = max / p10 > 5 ? p10 : (max / p10 > 2 ? p10 / 2 : p10 / 5);

        var s = '<svg width="' + W + '" height="' + H + '" font-family="Arial" font-size="12">';
        // Linhas de grelha + eixo Y
        for (var v = 0; v <= max; v += passo) {
            s += '<line x1="' + xIni + '" x2="' + xFim + '" y1="' + Y(v) + '" y2="' + Y(v) + '" stroke="' + GK.grid + '"/>';
            s += eixoFora
                ? '<text x="' + (xIni - 8) + '" y="' + (Y(v) + 4) + '" text-anchor="end" fill="' + GK.muted + '">' + gkNum(v) + '</text>'
                : '<text x="' + (xIni + 4) + '" y="' + (Y(v) - 4) + '" fill="' + GK.muted + '" stroke="#fff" stroke-width="3" paint-order="stroke">' + gkNum(v) + '</text>';
        }
        // Separadores das colunas (como no calendário)
        cols.forEach(function (c, i) { if (i) s += '<line x1="' + c.l + '" x2="' + c.l + '" y1="' + m.t + '" y2="' + (H - m.b) + '" stroke="#efeee9"/>'; });
        // Dias (eixo X)
        D.dias.forEach(function (d, i) {
            var hj = i === D.marcaHoje;
            s += '<text x="' + X(i) + '" y="' + (H - 9) + '" text-anchor="middle" fill="' + (hj ? '#007bff' : GK.txt) + '" font-weight="' + (hj ? 700 : 400) + '">' +
                 escHtml(d.clone().locale('pt').format('ddd DD/MM')) + '</text>';
        });
        // Barras: produzido no dia
        if (D.temProd) {
            o.prod.forEach(function (q, i) {
                if (i > ateHoje || !q) return;
                var bw = Math.min(36, cols[i].w * 0.3);
                s += '<rect x="' + (X(i) - bw / 2) + '" y="' + Y(q) + '" width="' + bw + '" height="' + (Y(0) - Y(q)) + '" rx="3" fill="' + GK.prod + '" opacity=".28"/>';
            });
        }
        // Planeado acumulado
        s += '<polyline fill="none" stroke="' + GK.plan + '" stroke-width="2" stroke-dasharray="5 4" points="' + o.pa.map(function (v, i) { return X(i) + ',' + Y(v); }).join(' ') + '"/>';
        s += '<text x="' + (xFim - 6) + '" y="' + (Y(o.pa[n - 1]) - 8) + '" text-anchor="end" fill="' + GK.txt + '" font-weight="700" stroke="#fff" stroke-width="3" paint-order="stroke">Planeado ' + gkNum(o.pa[n - 1]) + '</text>';
        // Produzido acumulado (até hoje)
        if (ateHoje >= 0) {
            var pts = o.ra.slice(0, ateHoje + 1).map(function (v, i) { return X(i) + ',' + Y(v); }).join(' ');
            s += '<polygon fill="' + GK.prod + '" fill-opacity=".10" points="' + X(0) + ',' + Y(0) + ' ' + pts + ' ' + X(ateHoje) + ',' + Y(0) + '"/>';
            s += '<polyline fill="none" stroke="' + GK.prod + '" stroke-width="2.5" points="' + pts + '"/>';
            o.ra.slice(0, ateHoje + 1).forEach(function (v, i) {
                s += '<circle cx="' + X(i) + '" cy="' + Y(v) + '" r="' + (i === ateHoje ? 4.5 : 3) + '" fill="' + GK.prod + '" stroke="#fff" stroke-width="2"/>';
            });
            var ultimo = ateHoje === n - 1;
            s += '<text x="' + (ultimo ? X(ateHoje) - 8 : X(ateHoje) + 8) + '" y="' + (Y(o.ra[ateHoje]) + 18) + '" text-anchor="' + (ultimo ? 'end' : 'start') +
                 '" fill="#0b5cad" font-weight="700" stroke="#fff" stroke-width="3" paint-order="stroke">Produzido ' + gkNum(o.ra[ateHoje]) + '</text>';
        }
        // Hoje: contorno azul da coluna, como no calendário
        if (D.marcaHoje >= 0) {
            var c = cols[D.marcaHoje];
            s += '<rect x="' + (c.l + 1) + '" y="' + (m.t - 6) + '" width="' + (c.w - 2) + '" height="' + (H - m.t - m.b + 6) + '" fill="none" stroke="#007bff" stroke-width="2"/>';
        }
        // Zonas de hover por dia
        cols.forEach(function (c, i) {
            s += '<rect class="gk-zona" data-i="' + i + '" x="' + c.l + '" y="' + m.t + '" width="' + c.w + '" height="' + (H - m.t - m.b) + '" fill="transparent"/>';
        });
        s += '</svg><div class="gk-dica"></div>';
        $alvo.html(s);

        var $dica = $alvo.find('.gk-dica');
        $alvo.find('.gk-zona').on('mouseenter click', function () {
            var i = +$(this).attr('data-i');
            var t = '<b>' + escHtml(D.dias[i].clone().locale('pt').format('ddd DD/MM')) + ' · ' + escHtml(o.ka) + '</b><br>' +
                    'Planeado acumulado: <b>' + gkNum(o.pa[i]) + '</b> pçs';
            if (D.temProd && i <= D.hoje) {
                var desvio = o.ra[i] - o.pa[i];
                t += '<br>Produzido acumulado: <b>' + gkNum(o.ra[i]) + '</b> pçs' +
                     '<br>No dia: ' + (o.prov[i] ? '≈ ' : '') + gkNum(o.prod[i]) + ' de ' + gkNum(o.plan[i]) + ' planeadas' +
                     (o.prov[i] ? '<br><span style="color:#b26b00">≈ Sem Hydra nem Qtd Total Dia: soma da Qtd Produzida dos turnos</span>' : '') +
                     (o.conflito[i] ? '<br><span style="color:#b26b00">⚠ Qtd Total Dia diferente entre turnos (usado o maior)</span>' : '') +
                     '<br><b style="color:' + (desvio < 0 ? '#e02424' : '#1fa84a') + '">Desvio: ' + gkDesvioTxt(desvio) + ' pçs</b>';
            } else {
                t += '<br>No dia: ' + gkNum(o.plan[i]) + ' planeadas';
            }
            $dica.html(t).show();
            var x = X(i) + 14, w = $dica.outerWidth();
            if (x + w > W) x = X(i) - 14 - w;
            $dica.css({ left: x, top: m.t + 8 });
        }).on('mouseleave', function () { $dica.hide(); });
    }

    function gkDesvioTxt(d) { return (d > 0 ? '+' : (d < 0 ? '−' : '')) + gkNum(Math.abs(d)); }

    // Tabela: uma linha por KA. Colunas dos dias alinhadas com o calendário; o resumo (Semana,
    // Desvio, %) fica à direita, por baixo da coluna das Legendas. Cada dia mostra o desvio
    // acumulado e a cor de fundo segue a % produzido / planeado acumulado até esse dia.
    function tabelaGraficoKA(D, sel, cols, W) {
        var n = D.dias.length;
        var linhas = sel.ka === 'Todos' ? (D.lista.length > 1 ? D.lista.concat([D.total]) : D.lista) : [sel];
        var esq = Math.max(0, Math.round(cols[0].l));
        var kaEsq = esq >= 100;                                   // vista por turnos: KA na coluna "Turno"
        var xFim = cols[n - 1].l + cols[n - 1].w, gap = 12;
        var dirW = Math.max(160, W - xFim - gap);

        // Colunas do resumo (à direita)
        var res = [];
        if (!kaEsq) res.push({ id: 'ka', t: 'KA', p: D.temProd ? 0.36 : 0.55 });
        if (D.temProd) res.push({ id: 'sem', t: 'Semana', p: 0.34 }, { id: 'dv', t: 'Desvio', p: 0.2 }, { id: 'pct', t: '%', p: 0.18 });
        else res.push({ id: 'sem', t: 'Semana (plan.)', p: 0.45 });
        var soma = res.reduce(function (a, c) { return a + c.p; }, 0);
        res.forEach(function (c) { c.w = Math.floor(dirW * c.p / soma); });

        var h = '<table class="gk-tabela" style="width:' + Math.round(xFim + gap + res.reduce(function (a, c) { return a + c.w; }, 0)) + 'px"><colgroup>';
        h += '<col style="width:' + esq + 'px">';
        cols.forEach(function (c) { h += '<col style="width:' + c.w + 'px">'; });
        h += '<col style="width:' + gap + 'px">';
        res.forEach(function (c) { h += '<col style="width:' + c.w + 'px">'; });
        h += '</colgroup><tr><th style="text-align:left">' + (kaEsq ? 'KA' : '') + '</th>';
        D.dias.forEach(function (d, i) {
            h += '<th class="' + (i === D.marcaHoje ? 'gk-hoje' : '') + '">' + escHtml(d.clone().locale('pt').format('ddd DD/MM')) + '</th>';
        });
        h += '<th class="gk-gap"></th>';
        res.forEach(function (c, k) { h += '<th class="gk-res' + (k === 0 ? ' gk-res-1' : '') + '">' + c.t + '</th>'; });
        h += '</tr>';

        linhas.forEach(function (o) {
            var tot = o.ka === 'Todos', nome = tot ? 'Total do CC' : escHtml(o.ka);
            h += '<tr' + (tot ? ' class="gk-total"' : '') + '><td class="gk-kacel">' + (kaEsq ? nome : '') + '</td>';
            D.dias.forEach(function (d, i) {
                var hj = i === D.marcaHoje ? ' gk-hoje' : '';
                if (!D.temProd) { h += '<td class="' + hj + '">' + gkNum(o.pa[i]) + '</td>'; return; }
                var prov = o.provAc[i] ? '<span class="gk-prov">≈</span>' : '';
                var conf = o.conflito[i] ? '<span class="gk-conf" title="Qtd Total Dia diferente entre turnos (usado o maior)">⚠</span>' : '';
                if (i > D.hoje) {
                    // Dias seguintes: acumulado previsto (sem cor) = o que falta para cumprir o plano até esse dia
                    h += '<td class="gk-fut' + hj + '" title="Dia por produzir · falta ' + gkNum(Math.max(0, o.pa[i] - o.ra[i])) + ' pçs para cumprir o acumulado">' +
                         '<span class="gk-big">' + gkDesvioTxt(o.ra[i] - o.pa[i]) + '</span>' +
                         '<span class="gk-small">' + prov + gkNum(o.ra[i]) + ' / ' + gkNum(o.pa[i]) + '</span></td>';
                    return;
                }
                var e = gkEstado(o.ra[i], o.pa[i]);
                h += '<td class="' + (e ? 'gk-c-' + e.cls : '') + hj + '" title="' + (e ? e.txt + (e.pct !== null ? ' · ' + e.pct + '%' : '') : '') + (o.provAc[i] ? ' · inclui valores provisórios' : '') + '">' +
                     '<span class="gk-big">' + gkDesvioTxt(o.ra[i] - o.pa[i]) + conf + '</span>' +
                     '<span class="gk-small">' + prov + gkNum(o.ra[i]) + ' / ' + gkNum(o.pa[i]) + '</span></td>';
            });
            h += '<td class="gk-gap"></td>';
            var planTot = o.pa[n - 1];
            var prodAte = D.hoje >= 0 ? o.ra[D.hoje] : 0, devia = D.hoje >= 0 ? o.pa[D.hoje] : 0;
            res.forEach(function (c, k) {
                var cl = 'gk-res' + (k === 0 ? ' gk-res-1' : '');
                if (c.id === 'ka') h += '<td class="' + cl + ' gk-kacel">' + nome + '</td>';
                else if (c.id === 'sem') h += '<td class="' + cl + '">' + (D.temProd ? '<b>' + gkNum(prodAte) + '</b> <span class="p">/ ' + gkNum(planTot) + '</span>' : '<b>' + gkNum(planTot) + '</b>') + '</td>';
                else if (c.id === 'dv') h += '<td class="' + cl + '"><b>' + gkDesvioTxt(prodAte - devia) + '</b></td>';
                else if (c.id === 'pct') {
                    var e = gkEstado(prodAte, devia);
                    h += '<td class="' + cl + '">' + (e ? '<span class="gk-pct" style="background:' + GK_CORES[e.cls] + '" title="' + e.txt + '">' + (e.pct !== null ? e.pct + '%' : '—') + '</span>' : '—') + '</td>';
                }
            });
            h += '</tr>';
        });
        h += '</table>';

        // Nota e cores por baixo da tabela
        h += '<div class="gk-rodape"><span>' + (D.temProd
            ? 'Em cada dia: <b>desvio acumulado</b> (produzido − planeado) e, por baixo, produzido / planeado acumulado (pçs). Produzido = <b>' + (modoTurnos() ? 'Hydra / Qtd Total Dia' : 'Qtd Produzida') + '</b>' + (modoTurnos() ? ', no dia em que foi mesmo produzido' : '') + '; dias seguintes a cinzento.' +
              (linhas.some(function (o) { return o.provAc[D.hoje < 0 ? 0 : D.hoje]; }) ? ' <span class="gk-prov">≈</span> Sem Hydra nem Qtd Total Dia: usada a soma da Qtd Produzida dos turnos.' : '')
            : 'Em cada dia: planeado acumulado (pçs).') + '</span>';
        if (D.temProd) {
            h += '<span class="gk-cores">% produzido / planeado: ' +
                 '<span><i class="gk-sw-cor gk-c-bad"></i>&lt; 80%</span>' +
                 '<span><i class="gk-sw-cor gk-c-warn"></i>80% a 90%</span>' +
                 '<span><i class="gk-sw-cor gk-c-ok"></i>90% a 110%</span>' +
                 '<span><i class="gk-sw-cor gk-c-over"></i>≥ 110%</span></span>';
        }
        return h + '</div>';
    }

    $('#graficoKA').on('click', '.gk-chip', function () {
        kaGrafico = $(this).attr('data-ka');
        renderGraficoKA();
    });

    // ================= KA numa só linha =================
    // Reduz o tamanho da letra do KA (13 px → mínimo 9 px) até caber na largura do cartão,
    // para o formato NNNNN.NN.NNN.NN nunca partir em duas linhas (ex: vista de 7 dias).
    function ajustarKA($ctx) {
        ($ctx || $(document)).find('.pp-ka').each(function () {
            var el = this, tam = 13;
            el.style.fontSize = tam + 'px';
            el.style.letterSpacing = '';
            if (!el.clientWidth) return;                                   // escondido: ajusta quando aparecer
            if (el.scrollWidth > el.clientWidth) el.style.letterSpacing = '0';
            while (el.scrollWidth > el.clientWidth && tam > 9) {
                tam -= 0.5;
                el.style.fontSize = tam + 'px';
            }
        });
    }

    var temporizadorKA = null;
    $(window).on('resize', function () {
        clearTimeout(temporizadorKA);
        temporizadorKA = setTimeout(function () { ajustarKA($('#shiftCalendar, #calendarsContainer')); renderGraficoKA(); }, 150);
    });

    // ================= Calendário FullCalendar (OPA / OPT) =================
    // A barra nativa do FullCalendar está desligada (header: false); a navegação é feita
    // pela barra comum (#calToolbar), para ter o mesmo aspeto da vista de turnos.

    function GenerateCalendar(selector) {
        $(selector).fullCalendar({
            locale: 'pt',
            defaultView: 'basicWeek',
            defaultDate: dataParaCalendario(),
            header: false,
            weekNumbers: false,
            weekends: mostrarFimDeSemana,
            contentHeight: 650,
            views: {
                basicWeek: { columnFormat: 'ddd DD/MM', columnHeaderFormat: 'ddd DD/MM' },
                month: { weekNumbers: true }
            },
            viewRender: function (view) {
                if ($(selector).is(':visible')) {
                    guardarDataDaVista(view);
                    atualizarToolbarFC(view);
                }
            },
            events: function (start, end, timezone, callback) {
                callback(eventosFC());
            },
            eventOrder: "sortLevel,prioridade",
            eventAfterAllRender: function () { ajustarKA($(selector)); },
            eventRender: function(event, element) {
                // Substitui o conteúdo do evento do FullCalendar pelo cartão comum
                element.addClass(classeCartao(event)).html(cartaoInnerHtml(event));
            },
            eventClick: function (event) {
                abrirModalDetalhes(event);
            }
        });
    }

    // ================= Modal de detalhes (3 tipos) =================

    function abrirModalDetalhes(event) {
        $('#lblKA').text(event.title);
        $('#lblCC').text(event.cc ? event.cc : 'N/A');

        var momentData = moment(event.dataOriginal);
        var stringDataFormatada = (momentData.format('HH:mm') !== '00:00') ? momentData.format('YYYY-MM-DD HH:mm') : momentData.format('YYYY-MM-DD');
        $('#lblData').text(stringDataFormatada);

        // Repor layout base (pode ter sido alterado por um registo OHF)
        $('#containerValidacoes').show();
        $('#lblVal1Label, #lblPopFerramenta, #lblVal2Label, #lblPopDispMP, #lblVal3Label, #lblPopAbastecida').show();
        $('#lblVal1Label').text('Ferramenta:');
        $('#lblVal3Label').text('Abastecimento:');
        $('#rowMetricasOHF').hide();
        $('#lblTurnoLabel').hide(); $('#lblTurno').hide();
        $('#ohfEdicao').hide();
        eventoEmEdicao = null;
        $('#btnEditarItem').text('Editar Registo').removeClass('btn-ohf-form');

        if (event.tipoLista === 'OHF') {
            var t = obterTurno(event.turno);
            $('#modalTitle').text('Plano de Produção - ' + (event.area || 'OHF'));
            $('#lblData').text(momentData.format('YYYY-MM-DD'));
            $('#lblStatusLabel').show(); $('#lblStatus').show().text(event.status || '-');
            $('#lblTurnoLabel').show();
            $('#lblTurno').show().text(t.horario ? t.nome + ' (' + t.horario + ')' : t.nome);

            // Validações conforme a área (OHF1: as 3 | restantes: só Ferramenta) + Planeamento
            var valsM = validacoesOHF(event.area);
            $('#containerValidacoes').prependTo('#colDireita').show();
            $('#lblValidacoesTitle').removeClass('mt-2');
            $('#lblVal1Label').text('Ferramenta:');
            var notaSeq = function (campo) {
                return (event.herdado && event.herdado[campo]) ? ' <small style="color:#666;font-weight:600;" title="Valor assumido da sequência do mesmo KA">(sequência)</small>' : '';
            };
            $('#lblPopFerramenta').html((getStatusIconHtml(event.dispFerramenta, true) || '-') + notaSeq('dispFerramenta'));
            $('#lblVal1Label, #lblPopFerramenta').toggle(valsM.indexOf('ferramenta') !== -1);
            $('#lblVal2Label').text('Matéria-Prima:');
            $('#lblPopDispMP').html((getStatusIconHtml(event.dispMP, true) || '-') + notaSeq('dispMP'));
            $('#lblVal2Label, #lblPopDispMP').toggle(valsM.indexOf('mp') !== -1);
            $('#lblVal3Label').text('Abastecimento:');
            $('#lblPopAbastecida').html((getStatusIconHtml(event.mpAbastecida, true) || '-') + notaSeq('mpAbastecida'));
            $('#lblVal3Label, #lblPopAbastecida').toggle(valsM.indexOf('abast') !== -1);
            $('#rightSectionTitle').text('PLANEAMENTO').addClass('mt-3');
            $('#rowMétricasProducao').hide();
            $('#rowMétricasEnsaio').hide();
            $('#rowMetricasOHF').show();
            $('#lblHorasPlanOHF').text(formatNumeric(event.horasPlan, 'h'));
            $('#lblQtdPlanOHF').text(formatNumeric(event.qtdPlan, 'pçs'));
            var ef = qtdProduzidaEfetiva(event);
            $('#lblTurnoTitle').text('Este turno' + (event.turno ? ' · ' + event.turno : ''));
            $('#lblQtdProdOHF').html(ef
                ? escHtml(formatNumeric(ef.v, 'pçs')) + (ef.hydra ? etiquetaHydraHtml('Provisório: vem do Hydra (' + textoHydraAte() + '). Fica gravado na Qtd Produzida quando o registo passa a Produzido.') : '')
                : '<span class="ohf-porpreencher">aguarda Hydra</span>');
            $('#lblFaltaOHF').html(ef ? faltaHtml(event.qtdPlan, ef.v) : '-');

            // Sequência do mesmo KA em turnos seguidos (incluindo o 1.º): totais
            var emSequencia = event.cadeiaN > 1;   // 2 ou mais turnos seguidos do mesmo KA
            $('#lblSeqTitle, .seq-ohf').toggle(emSequencia);
            if (emSequencia) {
                $('#lblSeqTitle').text('Sequência · ' + event.cadeiaN + ' turnos · ' + event.cadeiaDias + (event.cadeiaDias === 1 ? ' dia' : ' dias'));
                $('#lblQtdTotalOHF').text(formatNumeric(event.cadeiaTotal, 'pçs'));
                $('#lblTotalProdOHF').html((event.cadeiaProv ? '<span class="gk-prov" title="Inclui quantidades provisórias do Hydra">≈</span>' : '') + escHtml(formatNumeric(event.cadeiaProduzida, 'pçs')));
                $('#lblTotalFaltaOHF').html(faltaHtml(event.cadeiaTotal, event.cadeiaProduzida));
            }

            $('#btnEditarItem').attr('href', urlEditar(listGuidOHF, event.id)).text('Formulário completo').addClass('btn-ohf-form');
            // Edição no próprio popup: o Status e as validações ficam editáveis aqui
            $('#containerValidacoes').hide();
            preencherEdicaoOHF(event);
        }
        else if (event.tipoLista === 'Producao') {
            $('#lblPopFerramenta').html(getStatusIconHtml(event.dispFerramenta, true));
            $('#modalTitle').text('Detalhes Gerais da Operação - Produção');
            $('#lblStatusLabel').show(); $('#lblStatus').show().text(event.status);

            $('#containerValidacoes').appendTo('#colEsquerda');
            $('#lblValidacoesTitle').addClass('mt-2');

            $('#lblVal2Label').text('Matéria-Prima:');
            $('#lblPopDispMP').html(getStatusIconHtml(event.dispMP, true));
            $('#lblVal3Label').show(); $('#lblPopAbastecida').show().html(getStatusIconHtml(event.mpAbastecida, true));

            $('#rightSectionTitle').text('PLANEAMENTO').removeClass('mt-3');
            $('#rowMétricasProducao').show();
            $('#rowMétricasEnsaio').hide();

            $('#lblHorasPlan').text(formatNumeric(event.horasPlan, 'h'));
            $('#lblQtdPlan').text(formatNumeric(event.qtdPlan, 'pçs'));
            var prodPreenchida = event.qtdProduzida !== '' && event.qtdProduzida !== undefined && !isNaN(parseFloat(event.qtdProduzida));
            $('#lblQtdProd').html(prodPreenchida ? escHtml(formatNumeric(event.qtdProduzida, 'pçs')) : '<span class="ohf-porpreencher">por preencher</span>');
            $('#lblFaltaProd').html(prodPreenchida ? faltaHtml(event.qtdPlan, event.qtdProduzida) : '-');
            $('#lblQtdMin').text(formatNumeric(event.qtdMinima, 'pçs'));
            $('#lblMPNecessaria').text(formatNumeric(event.mpNecessaria, 'Kg'));
            $('#lblMPMinima').text(formatNumeric(event.mpMinima, 'Kg'));

            $('#btnEditarItem').attr('href', urlEditar(listGuidProd, event.id));
        }
        else {
            $('#lblPopFerramenta').html(getStatusIconHtml(event.dispFerramenta, true));
            $('#modalTitle').text('Detalhes do Ensaio do Ferramenta');
            if (areasTurnos.has(event.area) && event.turno) {
                var tE = obterTurno(event.turno);
                $('#lblTurnoLabel').show();
                $('#lblTurno').show().text(tE.horario ? tE.nome + ' (' + tE.horario + ')' : tE.nome);
            }
            $('#lblStatusLabel').hide(); $('#lblStatus').hide();

            $('#containerValidacoes').prependTo('#colDireita');
            $('#lblValidacoesTitle').removeClass('mt-2');

            $('#lblVal2Label').text('Matéria-Prima + BIPS:');
            $('#lblPopDispMP').html(getStatusIconHtml(event.dispMP, true));
            $('#lblVal3Label').hide(); $('#lblPopAbastecida').hide();

            $('#rightSectionTitle').text('MÉTRICAS DO ENSAIO').addClass('mt-3');
            $('#rowMétricasProducao').hide();
            $('#rowMétricasEnsaio').show();

            $('#lblQtdEnsaio').text(formatNumeric(event.qtdEnsaio, 'pçs'));

            $('#btnEditarItem').attr('href', urlEditar(listGuidEnsaio, event.id));
        }

        $('#modalDetalhes').modal('show');
    }
});
</script>

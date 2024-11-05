

const questionsData = [
    {
        id: 1,
        text: 'Queremos conocerte, ¿cuál es tu nombre?',
        type: 'text',
        options: []
    },
    {
        id: 2,
        text: '¿Cuál es tu cargo/posición dentro de tu empresa?',
        type: 'options',
        options: [
            'Board member',
            'C-level',
            'Gerente',
            'Subgerente',
            'Jefe área',
            'Líder de área',
            'Ejecutivo / Analista',
            'Otro'
        ]
    },
    {
        id: 3,
        text: '¿Cuáles son tus principales desafíos para 2024?',
        type: 'options',
        options: [
            'Aumentar conversiones de leads a clientes',
            'Rocket customer churn',
            'Implementar un programa VoC',
            'Reducir costos en gestión de reclamos',
            'Optimizar procesos comerciales',
            'Optimizar procesos operativos',
            'Otro'
        ]
    },
    {
        id: 4,
        text: '¿Qué CRM están utilizando en tu empresa?',
        type: 'options',
        options: [
            'SAP',
            'Microsoft Dynamics',
            'Salesforce',
            'Hubspot',
            'Zoho',
            'Freshsales (Freshdesk)',
            'Monday',
            'Otro',
            'No tengo CRM'
        ]
    },
    {
        id: 5,
        text: '¿A cuál industria pertenece tu empresa?',
        type: 'options',
        options: [
            'Tecnología',
            'Servicios',
            'Salud',
            'Manufactura',
            'Telecomunicaciones',
            'Producción/Fabricación',
            'Logística',
            'Consumo Masivo',
            'Mayorista',
            'Retail',
            'Software',
            'Financiera'
        ]
    }
];

export default questionsData;

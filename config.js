var config = {
    owner: {
        name: 'Astrum'
    },
    admin:{
        user : 'admin',
        pass : '12345678'
    },
    mongodb:{
        local: 'mongodb://localhost/astrum',
        mlab_astrum: 'mongodb://astrum:astrum@ds145395.mlab.com:45395/astrum',
        mlab_test: 'mongodb://astrum:astrum@ds139685.mlab.com:39685/astrum-test'
    },
    postgresql: {
      //local: 'postgres://joelengt:kuroyukihime2110@localhost:4002/astrum_map_production_pro1', // mac joel
      local: 'postgres://postgres:@localhost:5432/astrum_map_production_pro',         // servidor        
      //local: 'postgres://postgres:gatogato@localhost:5432/astrum_map_production_pro', // windows
      data_connect: {
        user: 'joelengt', //env var: PGUSER 
        database: 'astrum_map_production_pro', //env var: PGDATABASE 
        password: 'secret', //env var: PGPASSWORD 
        port: 5432, //env var: PGPORT 
        max: 10, // max number of clients in the pool 
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed 
      }
    },
    cloudinary : {
        cloud_name: 'cromlu',
        api_key: '532668554832195',
        api_secret: 'PLstoVjJNoBiqPhNDGriHyVWVTc'
    },
    status: {
        pendiente:     'pendiente',
        en_proceso:    'en_proceso',
        resuelto:      'resuelto',
        no_resuelto:   'no_resuelto',
        cancelado:     'cancelado',
        reprogramado:  'reprogramado',
        reportado:     'reportado',
        no_asignado:   'no_asignado'
    },
    users_access: {
        onwers: 'onwers',
        admins: 'admins',
        officers: 'officers',
        viewer:    'officer-viewer',
        users_campo: 'users-campo'
    },
    card_status: {
        read: true,
        no_read: false
    },
    notification_type: {
        reporte:       'reporte',
        change_status: 'change_status',
        new_order:     'new_order',
        type_answer: {
            reporte: {
                aceptada: 'aceptada',
                rechazada: 'rechazada'
            },
            change_status: {
                cancelada: 'cancelada',
                reprogramada: 'reprogramada',
                actualizada: 'actualizada',
                resuelta: 'resuelta',
                progreso: 'progreso'
            },
            new_order: {
                asignado: 'asignado'
            }
        }
    },
    path_system: {
        ubuntu: '/home/baudelaire/Desktop/astrumApp',
        server: '/var/www/apps/astrum',
        mac:    '/Users/joelengt/Desktop/Proyectos Web/coder/astrum'
    },
    hostlocal_url: {
        url: 'http://45.55.159.35:5002',
        server: 'https://joelgt.com'
    }
}

module.exports = config


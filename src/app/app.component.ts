import { Component } from '@angular/core'
import { PropertiesService } from './properties.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'prueba_frontend'
  menuOptions = [
    {
      title: 'En Venta',
      type: 'dropdown',
      options: ['Casas', 'Apartamentos', 'Oficinas', 'Desarrollos nuevos'],
    },
    {
      title: 'En Alquiler',
      type: 'dropdown',
      options: ['Brokers', 'Dueños'],
    },
    {
      title: 'Hipoteca',
      type: 'dropdown',
      options: ['Entidades financieras', 'Buscar preaprobación'],
    },
    {
      title: 'Necesito Ayuda',
      type: 'dropdown',
      options: ['Guías para comprar una propiedad'],
    },
  ]

  properties:any = [
    {
      _id: '6140f2528e048453ea123c98',
      title: 'Alquilo casa en condominio Al Andalus, La Guácima de Alajuela',
      address: 'Residencial Al Andalus. 600mts al Oeste de la salida de la Ruta 27.',
      location: {
        latitude: '9.963122447765874',
        longitude: '-84.25809570397551',
      },
      currency: '$',
      price: 186895,
      description: 'Se alquila casa para estrenar en Residencias Al Andalus, La Guácima de Alajuela.  3 cuartos, 3 baños completos, tanque de agua caliente, espacios amplios, jardín, terraza, parqueo para dos carros (hasta 3 con dos de los espacios en tandem).  Condominio ofrece seguridad 24/7, piscina para adultos y para niños, gimnasio, playground, casa club para actividades.   Se puede alquilar amueblada.',
      isFavorite: true,
      tags: ['Nuevo', 'Preventa'],
      features: {
        propertyType: 'Apartamento',
        levels: 2,
        lotSize: 6325,
        garage: 3,
        rooms: 4,
        bathrooms: 2,
        airConditioner: true,
        terrace: false,
        garden: true,
        serviceRoom: false,
        warehouse: false,
        security: true,
      },
    },
    // {
    //   _id: '6140f2528e048453ea123c99',
    //   title: 'Lujosa casa de un piso en San Isidro Heredia',
    //   address: 'San Isidro de Heredia, Costa Rica',
    //   location: {
    //     latitude: '10.0099535',
    //     longitude: '-84.0656467',
    //   },
    //   currency: '$',
    //   price: 465000,
    //   description: 'Una casa justa para quienes buscan un lugar donde quedarse definitivamente, ya que lo tiene todo!\n\nUbicada en San Isidro de Heredia donde el clima es una maravilla, fresco los 365 dias del año. En residencial cerrado, con seguridad 24/7. Poses una ubicación estratégica tanto para salir a Heredia o San Jose. Con la ventaja de estar cerca, de colegios como el Golden Valley y Yurusti',
    //   isFavorite: false,
    //   tags: [],
    //   features: {
    //     propertyType: 'Casa',
    //     levels: 3,
    //     lotSize: 1285,
    //     garage: 4,
    //     rooms: 5,
    //     bathrooms: 4,
    //     airConditioner: true,
    //     terrace: true,
    //     garden: true,
    //     serviceRoom: true,
    //     warehouse: true,
    //     security: true,
    //   },
    // },
    // {
    //   _id: '6140f2528e048453ea123d01',
    //   title: 'El mejor lote en Residencial Takiscu, Cartago',
    //   address: 'Oreamuno de Cartago',
    //   location: {
    //     latitude: '9.963122447765874',
    //     longitude: '-84.25809570397551',
    //   },
    //   currency: '$',
    //   price: 268000,
    //   description: 'Ubicado en San Rafael de Oreamuno, un lugar espectacular, característico por tener vista verde a 360 grados y un clima fresco e inigualable. \nEste lote es el mejor y mas grande de todo el residencial... con una vista al valle central de maravilla.\nEl residencial cuenta con su acceso con aguja, seguridad 24/7, calles adoquinadas, acceso controlado, y se encuentra a solo 10 minutos del centro de Cartago. \n\nCaracterísticas:\n\n- Área: 5100 m2\n- Capacidad de construcción: 15% (765)\nPueden ser 2 construcciones separadas\n- 2 frentes\n- Frente: 45 m\n- Fondo: 120 m\n- Topografía: plano, solo una pequeña parte con pendiente.\n- Cuota de mantenimiento: 55.000 colones',
    //   isFavorite: true,
    //   tags: ['Oferta'],
    //   features: {
    //     propertyType: 'Terreno',
    //     levels: 1,
    //     lotSize: 2600,
    //     garage: 0,
    //     rooms: 0,
    //     bathrooms: 0,
    //     airConditioner: false,
    //     terrace: false,
    //     garden: false,
    //     serviceRoom: false,
    //     warehouse: false,
    //     security: true,
    //   },
    // },
    // {
    //   _id: '6140f2528e048453ea123d02',
    //   title: 'Se vende casa comercial detrás Supermercado Peri Heredia Centro, 254 m2 lote, 180 m2 construcción',
    //   address: 'Calle 11 con Ave 5 en Los Jardines Heredia Centro',
    //   location: {
    //     latitude: '9.963122447765874',
    //     longitude: '-84.25809570397551',
    //   },
    //   currency: '$',
    //   price: 141500,
    //   description: 'se vende propiedad comercial en  Heredia Centro \n\n• ₡89,000,000  •\n• Provincia, Cantón, Distrito Heredia 40101 •\n• Calle 11 con Ave 5 en Los Jardines •\n• lado Norte de Minisuper Maba •\n• coordenadas para WAZE y Google Maps    10.0012, -84.1116    •\n• detras de Super mercado Peri Heredia Centro • \n• 254 m2 de lote • 180 m2 construcción •\n• Año 1987 • Altitud 1,160  m.s.n.m. •\n• 4 dormitorios • 1 baño • 2 salas • comedor •\n• cocina • desayunador • terraza •\n• área de pilas • cochera para 1 carro •\n• patio verde trasero • jardín frontal •\n• 2 niveles • lote rectangular y plano •\n• uso comercial • zona urbana-comercial •\n• dentro del Km2 del centro de Heredia •\n• TODOS los servicios disponibles •\n• vínculo para video en youtube •\nhttps://youtu.be/DSwo88hPwsE',
    //   isFavorite: true,
    //   tags: ['Nuevo', 'Oferta'],
    //   features: {
    //     propertyType: 'Casa',
    //     levels: 2,
    //     lotSize: 325,
    //     garage: 2,
    //     rooms: 2,
    //     bathrooms: 1,
    //     airConditioner: false,
    //     terrace: false,
    //     garden: true,
    //     serviceRoom: false,
    //     warehouse: true,
    //     security: true,
    //   },
    // }
  ]
  index = 0

  constructor(private properti: PropertiesService) {}

  ngOnInit(): void {
    this.getProperties()
  }


  nextProperti(){
    if(this.properties.length == this.index){
      this.index = 0
    }
    else{
      this.index++
    }
  }

  getProperties() {
    try {
      this.properti.getProperties().subscribe((data:any) => {
        this.properties = data.properties
      })
    } catch (error) {
      console.log(error)
    }
  }
}

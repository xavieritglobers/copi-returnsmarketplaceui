import React from 'react'
import { connect } from 'react-redux'
import DisplayData from './DisplayData'
import csvIcon from '../Assets/csv-icon.png'


const data =[
    {
        "idhistorico": 1,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-02T11:36:18.077Z",
            "valorTotal": 100303
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-29T06:02:46.767Z"
    },
    {
        "idhistorico": 2,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-27T23:46:31.213Z",
            "valorTotal": 132967
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-02T15:51:06.587Z"
    },
    {
        "idhistorico": 3,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-01T18:40:10.346Z",
            "valorTotal": 43842
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-11T17:42:12.236Z"
    },
    {
        "idhistorico": 4,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-07-01T21:35:43.096Z",
            "valorTotal": 148102
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-20T09:56:12.822Z"
    },
    {
        "idhistorico": 5,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-11T01:13:12.098Z",
            "valorTotal": 64884
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-27T05:14:12.452Z"
    },
    {
        "idhistorico": 6,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-08T03:24:44.617Z",
            "valorTotal": 70771
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-13T17:21:50.237Z"
    },
    {
        "idhistorico": 7,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-30T13:10:12.015Z",
            "valorTotal": 186375
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-06T15:37:12.525Z"
    },
    {
        "idhistorico": 8,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-21T09:23:09.641Z",
            "valorTotal": 235533
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-03T05:11:52.726Z"
    },
    {
        "idhistorico": 9,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-03T18:40:06.993Z",
            "valorTotal": 193201
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-20T20:19:03.693Z"
    },
    {
        "idhistorico": 10,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-03T03:49:29.332Z",
            "valorTotal": 220785
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-22T23:48:17.908Z"
    },
    {
        "idhistorico": 11,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-06T22:09:53.323Z",
            "valorTotal": 75931
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-15T23:59:49.125Z"
    },
    {
        "idhistorico": 12,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-29T23:56:21.963Z",
            "valorTotal": 233444
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-27T17:09:00.522Z"
    },
    {
        "idhistorico": 13,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-21T10:32:49.542Z",
            "valorTotal": 77434
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-17T12:31:40.803Z"
    },
    {
        "idhistorico": 14,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-07T13:12:42.415Z",
            "valorTotal": 82816
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-21T22:48:50.309Z"
    },
    {
        "idhistorico": 15,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-09T22:26:54.494Z",
            "valorTotal": 199689
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-12T04:48:46.124Z"
    },
    {
        "idhistorico": 16,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-10T11:27:47.032Z",
            "valorTotal": 40555
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-23T00:46:06.376Z"
    },
    {
        "idhistorico": 17,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-29T01:04:27.013Z",
            "valorTotal": 218944
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-07T22:33:12.462Z"
    },
    {
        "idhistorico": 18,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-08-07T20:57:46.227Z",
            "valorTotal": 73171
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-25T18:27:54.418Z"
    },
    {
        "idhistorico": 19,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-16T17:32:40.247Z",
            "valorTotal": 218811
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-07T13:53:40.820Z"
    },
    {
        "idhistorico": 20,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-13T00:38:55.066Z",
            "valorTotal": 201679
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-20T04:57:49.982Z"
    },
    {
        "idhistorico": 21,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-27T15:38:49.452Z",
            "valorTotal": 24547
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-09T14:26:10.791Z"
    },
    {
        "idhistorico": 22,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-28T12:47:44.115Z",
            "valorTotal": 23563
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-17T15:41:37.531Z"
    },
    {
        "idhistorico": 23,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-09T00:09:54.058Z",
            "valorTotal": 208488
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-15T18:09:14.958Z"
    },
    {
        "idhistorico": 24,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-04-06T06:02:29.902Z",
            "valorTotal": 23399
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-10T01:53:40.060Z"
    },
    {
        "idhistorico": 25,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-21T05:44:48.300Z",
            "valorTotal": 90622
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-15T06:36:09.216Z"
    },
    {
        "idhistorico": 26,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-02-17T09:30:42.267Z",
            "valorTotal": 143054
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-26T21:05:08.249Z"
    },
    {
        "idhistorico": 27,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-06T04:27:42.109Z",
            "valorTotal": 71715
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-29T09:23:12.247Z"
    },
    {
        "idhistorico": 28,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-23T15:06:58.857Z",
            "valorTotal": 125135
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-28T05:17:24.175Z"
    },
    {
        "idhistorico": 29,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-23T13:45:45.173Z",
            "valorTotal": 156195
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-31T03:54:21.771Z"
    },
    {
        "idhistorico": 30,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-18T22:40:31.439Z",
            "valorTotal": 166341
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-13T17:11:48.380Z"
    },
    {
        "idhistorico": 31,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-08T12:29:11.147Z",
            "valorTotal": 235297
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-27T07:22:20.645Z"
    },
    {
        "idhistorico": 32,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-25T02:43:43.022Z",
            "valorTotal": 25408
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-20T15:51:10.496Z"
    },
    {
        "idhistorico": 33,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-08T09:41:44.195Z",
            "valorTotal": 152863
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-14T18:44:48.110Z"
    },
    {
        "idhistorico": 34,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-29T14:06:40.709Z",
            "valorTotal": 228180
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-09T11:42:50.918Z"
    },
    {
        "idhistorico": 35,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-04T23:38:17.305Z",
            "valorTotal": 52535
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-21T08:43:25.728Z"
    },
    {
        "idhistorico": 36,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-04T17:20:08.195Z",
            "valorTotal": 174937
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-23T00:59:34.847Z"
    },
    {
        "idhistorico": 37,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-23T18:52:42.967Z",
            "valorTotal": 182323
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-15T16:15:13.116Z"
    },
    {
        "idhistorico": 38,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-08-02T23:12:36.441Z",
            "valorTotal": 229379
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-28T05:43:04.109Z"
    },
    {
        "idhistorico": 39,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-09T14:05:24.986Z",
            "valorTotal": 60150
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-21T21:14:53.281Z"
    },
    {
        "idhistorico": 40,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-30T06:56:47.064Z",
            "valorTotal": 108172
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-14T16:10:31.325Z"
    },
    {
        "idhistorico": 41,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-08T17:53:14.567Z",
            "valorTotal": 157046
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-28T20:38:27.016Z"
    },
    {
        "idhistorico": 42,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-23T18:02:37.188Z",
            "valorTotal": 44171
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-27T04:04:07.674Z"
    },
    {
        "idhistorico": 43,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-27T15:44:28.757Z",
            "valorTotal": 119571
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-03T03:48:36.014Z"
    },
    {
        "idhistorico": 44,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-08T12:48:14.271Z",
            "valorTotal": 176266
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-11T08:56:41.572Z"
    },
    {
        "idhistorico": 45,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-05-17T02:31:54.984Z",
            "valorTotal": 172406
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-02T11:33:30.609Z"
    },
    {
        "idhistorico": 46,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-02T05:57:15.462Z",
            "valorTotal": 91845
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-01T05:27:46.603Z"
    },
    {
        "idhistorico": 47,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-10T00:20:11.510Z",
            "valorTotal": 134034
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-10T02:56:51.477Z"
    },
    {
        "idhistorico": 48,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-06T23:40:11.564Z",
            "valorTotal": 87101
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-20T00:59:33.458Z"
    },
    {
        "idhistorico": 49,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-02-15T05:58:54.331Z",
            "valorTotal": 166212
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-27T03:13:22.140Z"
    },
    {
        "idhistorico": 50,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-03T10:35:25.747Z",
            "valorTotal": 203894
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-11T23:46:36.057Z"
    },
    {
        "idhistorico": 51,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-18T09:03:19.339Z",
            "valorTotal": 120247
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-01T14:00:59.652Z"
    },
    {
        "idhistorico": 52,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-20T02:47:12.506Z",
            "valorTotal": 66533
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-17T02:37:32.880Z"
    },
    {
        "idhistorico": 53,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-02T15:02:26.411Z",
            "valorTotal": 76897
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-07T03:45:44.657Z"
    },
    {
        "idhistorico": 54,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-17T10:51:39.741Z",
            "valorTotal": 124779
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-20T04:42:16.793Z"
    },
    {
        "idhistorico": 55,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-07T19:30:43.056Z",
            "valorTotal": 35419
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-01T18:39:13.372Z"
    },
    {
        "idhistorico": 56,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-05T14:52:45.447Z",
            "valorTotal": 99723
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-11T10:44:29.633Z"
    },
    {
        "idhistorico": 57,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-27T04:41:06.473Z",
            "valorTotal": 243204
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-22T16:39:34.120Z"
    },
    {
        "idhistorico": 58,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-08-01T20:36:48.384Z",
            "valorTotal": 66392
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-08T04:09:41.110Z"
    },
    {
        "idhistorico": 59,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-08-08T10:19:25.065Z",
            "valorTotal": 103466
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-08T05:12:47.507Z"
    },
    {
        "idhistorico": 60,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-24T14:44:55.546Z",
            "valorTotal": 24219
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-11T00:10:34.602Z"
    },
    {
        "idhistorico": 61,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-29T16:06:10.103Z",
            "valorTotal": 112343
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-13T12:24:08.948Z"
    },
    {
        "idhistorico": 62,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-25T12:53:15.680Z",
            "valorTotal": 229215
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-19T11:13:18.445Z"
    },
    {
        "idhistorico": 63,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-06T17:12:30.211Z",
            "valorTotal": 197212
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-16T05:14:55.243Z"
    },
    {
        "idhistorico": 64,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-04T11:42:10.525Z",
            "valorTotal": 146003
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-01T18:56:44.094Z"
    },
    {
        "idhistorico": 65,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-08-07T09:07:35.188Z",
            "valorTotal": 77710
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-27T03:34:52.126Z"
    },
    {
        "idhistorico": 66,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-12T16:37:03.746Z",
            "valorTotal": 160370
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-13T17:42:06.675Z"
    },
    {
        "idhistorico": 67,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-03-16T00:26:29.402Z",
            "valorTotal": 107422
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-07T23:51:31.936Z"
    },
    {
        "idhistorico": 68,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-13T19:30:18.343Z",
            "valorTotal": 96834
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-04T11:08:49.514Z"
    },
    {
        "idhistorico": 69,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-11T00:26:05.552Z",
            "valorTotal": 249870
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-01T12:59:48.298Z"
    },
    {
        "idhistorico": 70,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-11T03:44:37.444Z",
            "valorTotal": 104802
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-19T18:02:51.765Z"
    },
    {
        "idhistorico": 71,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-08-03T08:43:06.791Z",
            "valorTotal": 149044
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-28T00:55:42.117Z"
    },
    {
        "idhistorico": 72,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-19T04:33:46.944Z",
            "valorTotal": 67021
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-01T07:04:00.440Z"
    },
    {
        "idhistorico": 73,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-08-09T15:17:11.183Z",
            "valorTotal": 117611
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-20T08:36:27.326Z"
    },
    {
        "idhistorico": 74,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-11T22:17:25.642Z",
            "valorTotal": 29485
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-08T00:01:07.823Z"
    },
    {
        "idhistorico": 75,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-02T13:02:04.962Z",
            "valorTotal": 201324
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-31T11:18:14.276Z"
    },
    {
        "idhistorico": 76,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-08-03T16:37:58.862Z",
            "valorTotal": 227088
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-29T01:42:20.807Z"
    },
    {
        "idhistorico": 77,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-15T09:03:49.450Z",
            "valorTotal": 199935
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-13T10:23:43.293Z"
    },
    {
        "idhistorico": 78,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-23T00:11:39.118Z",
            "valorTotal": 76566
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-24T11:22:19.166Z"
    },
    {
        "idhistorico": 79,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-06T00:39:44.699Z",
            "valorTotal": 35335
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-15T17:39:29.029Z"
    },
    {
        "idhistorico": 80,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-08-01T01:19:25.075Z",
            "valorTotal": 246381
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-14T01:52:13.376Z"
    },
    {
        "idhistorico": 81,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-01T01:19:54.822Z",
            "valorTotal": 194534
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-01T13:17:57.450Z"
    },
    {
        "idhistorico": 82,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-17T01:25:44.295Z",
            "valorTotal": 100855
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-21T19:19:47.792Z"
    },
    {
        "idhistorico": 83,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-09T07:05:05.373Z",
            "valorTotal": 249249
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-03T05:19:52.996Z"
    },
    {
        "idhistorico": 84,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-30T08:14:47.716Z",
            "valorTotal": 211368
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-05T02:11:19.035Z"
    },
    {
        "idhistorico": 85,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-05-18T08:25:16.021Z",
            "valorTotal": 176384
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-30T07:03:37.504Z"
    },
    {
        "idhistorico": 86,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-09T23:19:32.788Z",
            "valorTotal": 238123
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-05T19:22:30.617Z"
    },
    {
        "idhistorico": 87,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-13T00:14:27.848Z",
            "valorTotal": 139409
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-08T04:05:18.922Z"
    },
    {
        "idhistorico": 88,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-02T18:56:31.681Z",
            "valorTotal": 86955
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-02T01:10:53.757Z"
    },
    {
        "idhistorico": 89,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-19T00:37:48.245Z",
            "valorTotal": 211552
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-04T02:12:11.581Z"
    },
    {
        "idhistorico": 90,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-15T05:34:07.656Z",
            "valorTotal": 50240
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-20T00:28:37.809Z"
    },
    {
        "idhistorico": 91,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-03-09T15:56:44.352Z",
            "valorTotal": 211887
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-22T23:28:24.373Z"
    },
    {
        "idhistorico": 92,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-01-02T10:24:01.087Z",
            "valorTotal": 240752
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-10T22:46:59.233Z"
    },
    {
        "idhistorico": 93,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-30T18:28:11.759Z",
            "valorTotal": 188800
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-24T08:12:42.082Z"
    },
    {
        "idhistorico": 94,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-28T01:53:46.224Z",
            "valorTotal": 171494
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-02T07:24:07.724Z"
    },
    {
        "idhistorico": 95,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-05-26T00:37:06.621Z",
            "valorTotal": 185084
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-17T06:21:10.273Z"
    },
    {
        "idhistorico": 96,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-01-16T05:52:59.893Z",
            "valorTotal": 180259
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-12T02:18:20.824Z"
    },
    {
        "idhistorico": 97,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-18T17:12:03.557Z",
            "valorTotal": 78922
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-18T17:04:59.960Z"
    },
    {
        "idhistorico": 98,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-29T18:43:47.504Z",
            "valorTotal": 182428
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-02T10:39:14.402Z"
    },
    {
        "idhistorico": 99,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-04T09:23:58.184Z",
            "valorTotal": 28479
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-07T16:12:34.728Z"
    },
    {
        "idhistorico": 100,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-12T23:14:13.017Z",
            "valorTotal": 105811
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-21T04:49:46.376Z"
    },
    {
        "idhistorico": 101,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-07T06:07:00.898Z",
            "valorTotal": 83253
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-17T19:35:24.654Z"
    },
    {
        "idhistorico": 102,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-27T23:30:33.788Z",
            "valorTotal": 165238
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-11T22:58:55.616Z"
    },
    {
        "idhistorico": 103,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-25T01:09:31.301Z",
            "valorTotal": 82085
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-08T09:03:09.894Z"
    },
    {
        "idhistorico": 104,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-13T15:11:05.406Z",
            "valorTotal": 65551
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-29T03:52:42.706Z"
    },
    {
        "idhistorico": 105,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-15T10:40:06.865Z",
            "valorTotal": 55599
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-19T10:11:44.292Z"
    },
    {
        "idhistorico": 106,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-08T00:56:56.574Z",
            "valorTotal": 39667
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-30T04:32:24.605Z"
    },
    {
        "idhistorico": 107,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-20T19:30:44.061Z",
            "valorTotal": 118606
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-09T12:19:11.823Z"
    },
    {
        "idhistorico": 108,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-01-06T17:07:29.498Z",
            "valorTotal": 203285
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-16T11:40:30.495Z"
    },
    {
        "idhistorico": 109,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-08-06T14:15:28.979Z",
            "valorTotal": 129476
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-04T11:14:35.485Z"
    },
    {
        "idhistorico": 110,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-02T06:50:15.003Z",
            "valorTotal": 217556
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-05T19:56:14.733Z"
    },
    {
        "idhistorico": 111,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-11T18:00:51.935Z",
            "valorTotal": 71819
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-15T15:40:28.872Z"
    },
    {
        "idhistorico": 112,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-06T20:00:18.252Z",
            "valorTotal": 219685
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-11T01:20:01.397Z"
    },
    {
        "idhistorico": 113,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-22T20:34:17.600Z",
            "valorTotal": 78446
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-01T05:24:29.192Z"
    },
    {
        "idhistorico": 114,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-19T14:14:09.133Z",
            "valorTotal": 55428
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-23T22:46:41.294Z"
    },
    {
        "idhistorico": 115,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-26T07:54:04.061Z",
            "valorTotal": 147205
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-01T18:35:03.165Z"
    },
    {
        "idhistorico": 116,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-04T15:58:16.244Z",
            "valorTotal": 135715
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-31T17:35:39.685Z"
    },
    {
        "idhistorico": 117,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-11T05:36:42.566Z",
            "valorTotal": 215775
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-31T08:44:19.457Z"
    },
    {
        "idhistorico": 118,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-11T10:14:47.043Z",
            "valorTotal": 208402
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-09T03:27:41.263Z"
    },
    {
        "idhistorico": 119,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-03-08T13:39:09.294Z",
            "valorTotal": 125125
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-21T21:32:17.725Z"
    },
    {
        "idhistorico": 120,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-08T18:18:01.871Z",
            "valorTotal": 139069
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-25T18:52:44.439Z"
    },
    {
        "idhistorico": 121,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-08T20:52:37.069Z",
            "valorTotal": 241199
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-20T22:25:43.858Z"
    },
    {
        "idhistorico": 122,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-02-19T20:24:19.631Z",
            "valorTotal": 183086
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-18T12:34:34.456Z"
    },
    {
        "idhistorico": 123,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-27T12:55:01.139Z",
            "valorTotal": 81940
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-03T08:29:39.247Z"
    },
    {
        "idhistorico": 124,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-15T10:11:37.446Z",
            "valorTotal": 74327
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-11T17:39:03.242Z"
    },
    {
        "idhistorico": 125,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-08-12T09:43:12.793Z",
            "valorTotal": 246709
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-26T11:11:59.142Z"
    },
    {
        "idhistorico": 126,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-02-20T02:15:30.435Z",
            "valorTotal": 197818
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-14T08:36:47.490Z"
    },
    {
        "idhistorico": 127,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-05T03:45:59.439Z",
            "valorTotal": 153288
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-24T22:47:24.237Z"
    },
    {
        "idhistorico": 128,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-03T20:34:46.586Z",
            "valorTotal": 27598
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-25T05:50:16.625Z"
    },
    {
        "idhistorico": 129,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-14T21:21:50.157Z",
            "valorTotal": 110535
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-16T22:01:48.034Z"
    },
    {
        "idhistorico": 130,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-08-09T22:55:31.209Z",
            "valorTotal": 26524
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-21T10:32:25.046Z"
    },
    {
        "idhistorico": 131,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-02-20T06:23:30.644Z",
            "valorTotal": 106030
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-26T05:53:00.010Z"
    },
    {
        "idhistorico": 132,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-06T03:22:51.948Z",
            "valorTotal": 28110
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-06T10:31:56.363Z"
    },
    {
        "idhistorico": 133,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-05T03:57:03.096Z",
            "valorTotal": 115084
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-23T07:33:06.877Z"
    },
    {
        "idhistorico": 134,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-05-08T11:24:25.125Z",
            "valorTotal": 156685
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-29T00:56:49.698Z"
    },
    {
        "idhistorico": 135,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-09T03:09:23.055Z",
            "valorTotal": 49055
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-20T19:13:56.126Z"
    },
    {
        "idhistorico": 136,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-28T00:53:18.033Z",
            "valorTotal": 215491
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-28T13:01:10.411Z"
    },
    {
        "idhistorico": 137,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-11T01:24:08.000Z",
            "valorTotal": 231071
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-14T01:00:11.358Z"
    },
    {
        "idhistorico": 138,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-06-23T04:05:59.952Z",
            "valorTotal": 232193
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-21T06:27:02.176Z"
    },
    {
        "idhistorico": 139,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-08-02T04:33:01.376Z",
            "valorTotal": 189126
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-26T00:11:44.439Z"
    },
    {
        "idhistorico": 140,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-18T17:13:11.723Z",
            "valorTotal": 225468
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-21T19:20:02.635Z"
    },
    {
        "idhistorico": 141,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-20T13:39:30.593Z",
            "valorTotal": 170339
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-22T10:11:33.033Z"
    },
    {
        "idhistorico": 142,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-07T18:09:25.732Z",
            "valorTotal": 38953
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-29T21:07:24.594Z"
    },
    {
        "idhistorico": 143,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-15T10:00:07.007Z",
            "valorTotal": 35792
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-05T03:26:36.004Z"
    },
    {
        "idhistorico": 144,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-21T06:17:15.427Z",
            "valorTotal": 124631
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-20T02:41:13.590Z"
    },
    {
        "idhistorico": 145,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-13T12:18:20.553Z",
            "valorTotal": 24147
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-08T13:02:16.165Z"
    },
    {
        "idhistorico": 146,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-19T23:34:04.649Z",
            "valorTotal": 172950
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-26T23:06:04.801Z"
    },
    {
        "idhistorico": 147,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-20T22:59:08.109Z",
            "valorTotal": 245354
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-11T04:48:38.449Z"
    },
    {
        "idhistorico": 148,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-19T12:14:24.663Z",
            "valorTotal": 176098
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-10T21:39:57.284Z"
    },
    {
        "idhistorico": 149,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-30T13:45:59.626Z",
            "valorTotal": 161467
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-29T11:32:13.681Z"
    },
    {
        "idhistorico": 150,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-13T08:55:20.173Z",
            "valorTotal": 235233
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-21T07:08:58.787Z"
    },
    {
        "idhistorico": 151,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-24T16:27:27.858Z",
            "valorTotal": 171386
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-25T20:22:25.801Z"
    },
    {
        "idhistorico": 152,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-08T02:18:44.905Z",
            "valorTotal": 138345
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-18T02:56:25.155Z"
    },
    {
        "idhistorico": 153,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-05-15T01:12:45.082Z",
            "valorTotal": 128542
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-08T10:55:18.296Z"
    },
    {
        "idhistorico": 154,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-08-03T09:04:46.569Z",
            "valorTotal": 174282
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-28T06:44:08.686Z"
    },
    {
        "idhistorico": 155,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-18T01:56:46.697Z",
            "valorTotal": 226507
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-25T01:53:34.656Z"
    },
    {
        "idhistorico": 156,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-31T06:21:55.089Z",
            "valorTotal": 71268
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-21T22:49:19.715Z"
    },
    {
        "idhistorico": 157,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-14T13:20:32.453Z",
            "valorTotal": 242002
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-04T05:56:55.285Z"
    },
    {
        "idhistorico": 158,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-16T04:43:04.420Z",
            "valorTotal": 243085
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-08T08:18:57.939Z"
    },
    {
        "idhistorico": 159,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-28T23:55:44.917Z",
            "valorTotal": 33099
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-08T04:40:16.354Z"
    },
    {
        "idhistorico": 160,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-06-10T23:01:28.412Z",
            "valorTotal": 147617
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-06T22:55:10.902Z"
    },
    {
        "idhistorico": 161,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-05-03T12:51:43.471Z",
            "valorTotal": 128564
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-19T20:41:48.380Z"
    },
    {
        "idhistorico": 162,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-27T05:07:30.309Z",
            "valorTotal": 245529
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-23T10:09:07.200Z"
    },
    {
        "idhistorico": 163,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-06T01:48:46.782Z",
            "valorTotal": 141807
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-05T13:23:44.798Z"
    },
    {
        "idhistorico": 164,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-20T23:47:49.377Z",
            "valorTotal": 154793
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-20T18:59:20.339Z"
    },
    {
        "idhistorico": 165,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-27T18:18:20.442Z",
            "valorTotal": 231420
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-21T10:49:34.282Z"
    },
    {
        "idhistorico": 166,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-14T17:42:17.935Z",
            "valorTotal": 176738
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-20T02:39:35.402Z"
    },
    {
        "idhistorico": 167,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-02T21:04:08.800Z",
            "valorTotal": 94113
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-22T02:20:27.992Z"
    },
    {
        "idhistorico": 168,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-20T18:24:36.230Z",
            "valorTotal": 150195
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-08T04:53:52.633Z"
    },
    {
        "idhistorico": 169,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-07T19:06:08.287Z",
            "valorTotal": 61686
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-26T00:15:11.116Z"
    },
    {
        "idhistorico": 170,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-19T10:15:54.615Z",
            "valorTotal": 88502
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-01T14:33:40.252Z"
    },
    {
        "idhistorico": 171,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-22T07:41:55.254Z",
            "valorTotal": 127507
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-06T09:37:27.481Z"
    },
    {
        "idhistorico": 172,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-18T14:29:53.093Z",
            "valorTotal": 235624
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-28T21:00:45.965Z"
    },
    {
        "idhistorico": 173,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-07T14:21:46.144Z",
            "valorTotal": 76059
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-20T07:20:15.311Z"
    },
    {
        "idhistorico": 174,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-08-11T06:06:12.822Z",
            "valorTotal": 215474
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-09T22:06:10.751Z"
    },
    {
        "idhistorico": 175,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-17T06:26:00.723Z",
            "valorTotal": 196689
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-07T23:14:57.650Z"
    },
    {
        "idhistorico": 176,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-13T14:03:16.659Z",
            "valorTotal": 28948
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-27T11:41:55.137Z"
    },
    {
        "idhistorico": 177,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-08T02:50:01.316Z",
            "valorTotal": 188615
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-29T18:28:28.630Z"
    },
    {
        "idhistorico": 178,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-13T14:20:25.188Z",
            "valorTotal": 33546
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-27T06:01:04.752Z"
    },
    {
        "idhistorico": 179,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-12T00:27:29.918Z",
            "valorTotal": 155829
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-30T19:16:07.820Z"
    },
    {
        "idhistorico": 180,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-15T05:06:53.388Z",
            "valorTotal": 101087
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-07T18:22:05.416Z"
    },
    {
        "idhistorico": 181,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-08-05T11:49:33.396Z",
            "valorTotal": 147485
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-16T17:07:44.633Z"
    },
    {
        "idhistorico": 182,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-16T00:29:19.541Z",
            "valorTotal": 52191
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-22T23:19:35.559Z"
    },
    {
        "idhistorico": 183,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-03T19:36:26.515Z",
            "valorTotal": 101806
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-30T02:17:12.919Z"
    },
    {
        "idhistorico": 184,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-25T05:03:29.184Z",
            "valorTotal": 196706
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-24T14:50:37.614Z"
    },
    {
        "idhistorico": 185,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-02T09:10:04.649Z",
            "valorTotal": 76414
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-28T17:09:20.989Z"
    },
    {
        "idhistorico": 186,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-11T03:39:10.980Z",
            "valorTotal": 190567
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-21T04:54:22.035Z"
    },
    {
        "idhistorico": 187,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-12T15:25:16.445Z",
            "valorTotal": 151826
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-11T18:43:49.470Z"
    },
    {
        "idhistorico": 188,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-17T06:19:22.132Z",
            "valorTotal": 208524
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-30T07:51:44.796Z"
    },
    {
        "idhistorico": 189,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-10T15:37:51.563Z",
            "valorTotal": 192709
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-22T12:06:41.842Z"
    },
    {
        "idhistorico": 190,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-09T14:11:42.982Z",
            "valorTotal": 156178
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-17T23:31:20.529Z"
    },
    {
        "idhistorico": 191,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-27T15:58:43.622Z",
            "valorTotal": 132863
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-12T22:12:20.563Z"
    },
    {
        "idhistorico": 192,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-08-05T13:19:09.439Z",
            "valorTotal": 91964
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-02T04:16:55.689Z"
    },
    {
        "idhistorico": 193,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-06-30T00:16:48.238Z",
            "valorTotal": 215212
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-13T06:51:20.611Z"
    },
    {
        "idhistorico": 194,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-16T15:48:37.866Z",
            "valorTotal": 75182
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-21T06:37:04.960Z"
    },
    {
        "idhistorico": 195,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-04-30T09:19:19.962Z",
            "valorTotal": 114838
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-27T20:27:15.110Z"
    },
    {
        "idhistorico": 196,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-06T08:08:06.997Z",
            "valorTotal": 244923
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-02T12:21:05.980Z"
    },
    {
        "idhistorico": 197,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-27T13:30:03.593Z",
            "valorTotal": 189846
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-10T04:50:11.150Z"
    },
    {
        "idhistorico": 198,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-13T20:58:07.254Z",
            "valorTotal": 104786
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-27T21:30:17.195Z"
    },
    {
        "idhistorico": 199,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-04-08T10:21:22.947Z",
            "valorTotal": 147750
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-30T19:19:34.693Z"
    },
    {
        "idhistorico": 200,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-01-27T22:10:53.921Z",
            "valorTotal": 68427
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-30T20:48:54.224Z"
    },
    {
        "idhistorico": 201,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-13T01:30:23.824Z",
            "valorTotal": 140391
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-20T22:11:37.564Z"
    },
    {
        "idhistorico": 202,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-29T05:02:33.870Z",
            "valorTotal": 177714
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-27T22:42:08.327Z"
    },
    {
        "idhistorico": 203,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-13T09:39:47.785Z",
            "valorTotal": 173222
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-12T01:52:34.252Z"
    },
    {
        "idhistorico": 204,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-25T15:55:45.291Z",
            "valorTotal": 32863
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-21T04:25:41.845Z"
    },
    {
        "idhistorico": 205,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-04-07T15:47:13.378Z",
            "valorTotal": 44365
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-03T23:14:52.431Z"
    },
    {
        "idhistorico": 206,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-01-13T18:14:23.433Z",
            "valorTotal": 52048
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-24T10:08:34.812Z"
    },
    {
        "idhistorico": 207,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-10T12:38:23.395Z",
            "valorTotal": 206773
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-14T18:51:32.947Z"
    },
    {
        "idhistorico": 208,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-20T11:09:33.717Z",
            "valorTotal": 47514
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-08T04:06:03.488Z"
    },
    {
        "idhistorico": 209,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-27T23:11:22.639Z",
            "valorTotal": 69515
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-03T22:55:12.681Z"
    },
    {
        "idhistorico": 210,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-15T18:44:30.969Z",
            "valorTotal": 82378
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-03T03:30:49.455Z"
    },
    {
        "idhistorico": 211,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-22T19:04:28.472Z",
            "valorTotal": 20624
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-14T22:36:48.331Z"
    },
    {
        "idhistorico": 212,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-07-23T23:30:10.115Z",
            "valorTotal": 119034
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-01T01:54:14.100Z"
    },
    {
        "idhistorico": 213,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-26T20:19:30.829Z",
            "valorTotal": 160972
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-12T16:35:25.819Z"
    },
    {
        "idhistorico": 214,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-30T10:20:16.936Z",
            "valorTotal": 57140
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-11T05:27:06.936Z"
    },
    {
        "idhistorico": 215,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-09T00:04:55.390Z",
            "valorTotal": 142584
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-13T15:57:21.952Z"
    },
    {
        "idhistorico": 216,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-14T21:24:47.284Z",
            "valorTotal": 68301
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-23T12:47:01.474Z"
    },
    {
        "idhistorico": 217,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-05T17:16:07.410Z",
            "valorTotal": 72014
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-09T07:55:25.064Z"
    },
    {
        "idhistorico": 218,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-13T23:09:33.522Z",
            "valorTotal": 223268
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-25T08:13:09.646Z"
    },
    {
        "idhistorico": 219,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-05T10:29:49.300Z",
            "valorTotal": 72032
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-06T08:25:12.011Z"
    },
    {
        "idhistorico": 220,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-09T18:22:55.885Z",
            "valorTotal": 65815
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-17T10:26:50.674Z"
    },
    {
        "idhistorico": 221,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-18T05:49:29.905Z",
            "valorTotal": 162947
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-23T07:09:34.219Z"
    },
    {
        "idhistorico": 222,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-29T13:37:55.202Z",
            "valorTotal": 140668
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-29T23:39:13.986Z"
    },
    {
        "idhistorico": 223,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-22T23:49:41.013Z",
            "valorTotal": 248534
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-03T17:06:04.178Z"
    },
    {
        "idhistorico": 224,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-20T14:18:45.908Z",
            "valorTotal": 21552
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-16T06:58:12.229Z"
    },
    {
        "idhistorico": 225,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-06-25T08:08:06.455Z",
            "valorTotal": 124439
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-02T21:40:42.151Z"
    },
    {
        "idhistorico": 226,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-12T21:07:32.570Z",
            "valorTotal": 30508
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-27T20:43:28.199Z"
    },
    {
        "idhistorico": 227,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-11T01:57:43.398Z",
            "valorTotal": 82351
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-20T09:44:18.176Z"
    },
    {
        "idhistorico": 228,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-04T23:59:00.597Z",
            "valorTotal": 200634
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-22T21:25:33.327Z"
    },
    {
        "idhistorico": 229,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-15T15:18:15.340Z",
            "valorTotal": 93801
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-25T13:35:31.145Z"
    },
    {
        "idhistorico": 230,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-18T21:11:45.611Z",
            "valorTotal": 43550
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-04T17:06:21.550Z"
    },
    {
        "idhistorico": 231,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-23T16:29:09.144Z",
            "valorTotal": 205432
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-18T07:49:17.686Z"
    },
    {
        "idhistorico": 232,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-23T07:14:36.059Z",
            "valorTotal": 68263
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-12T00:55:51.438Z"
    },
    {
        "idhistorico": 233,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-08T21:33:03.745Z",
            "valorTotal": 89823
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-06T05:36:21.891Z"
    },
    {
        "idhistorico": 234,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-02T06:40:14.993Z",
            "valorTotal": 234101
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-25T22:31:29.920Z"
    },
    {
        "idhistorico": 235,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-23T14:02:36.139Z",
            "valorTotal": 202895
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-03T15:48:34.586Z"
    },
    {
        "idhistorico": 236,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-14T07:28:54.171Z",
            "valorTotal": 92217
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-03T06:51:42.532Z"
    },
    {
        "idhistorico": 237,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-23T20:55:33.529Z",
            "valorTotal": 53847
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-10T16:22:35.606Z"
    },
    {
        "idhistorico": 238,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-17T14:16:15.136Z",
            "valorTotal": 175039
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-05T13:26:27.275Z"
    },
    {
        "idhistorico": 239,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-18T02:13:52.272Z",
            "valorTotal": 150810
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-20T15:15:31.605Z"
    },
    {
        "idhistorico": 240,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-20T18:02:07.912Z",
            "valorTotal": 140263
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-03T02:48:08.858Z"
    },
    {
        "idhistorico": 241,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-29T14:28:22.103Z",
            "valorTotal": 67052
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-24T10:58:47.285Z"
    },
    {
        "idhistorico": 242,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-14T15:31:33.510Z",
            "valorTotal": 231947
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-13T13:37:05.177Z"
    },
    {
        "idhistorico": 243,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-01-31T15:05:37.541Z",
            "valorTotal": 175333
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-04T09:11:19.964Z"
    },
    {
        "idhistorico": 244,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-03T01:41:35.541Z",
            "valorTotal": 181979
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-15T22:33:08.855Z"
    },
    {
        "idhistorico": 245,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-13T18:47:52.374Z",
            "valorTotal": 140708
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-21T00:25:27.373Z"
    },
    {
        "idhistorico": 246,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-08-03T19:10:49.545Z",
            "valorTotal": 96417
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-10T23:24:04.936Z"
    },
    {
        "idhistorico": 247,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-25T16:37:18.341Z",
            "valorTotal": 77877
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-01T22:13:16.794Z"
    },
    {
        "idhistorico": 248,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-05T15:02:35.653Z",
            "valorTotal": 129099
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-07T04:56:30.793Z"
    },
    {
        "idhistorico": 249,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-23T22:10:31.321Z",
            "valorTotal": 96469
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-05T15:06:54.727Z"
    },
    {
        "idhistorico": 250,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-04-17T13:04:48.268Z",
            "valorTotal": 181860
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-10T02:13:56.753Z"
    },
    {
        "idhistorico": 251,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-04T03:41:38.746Z",
            "valorTotal": 35946
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-29T07:25:24.629Z"
    },
    {
        "idhistorico": 252,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-26T16:08:39.281Z",
            "valorTotal": 189247
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-20T23:13:02.838Z"
    },
    {
        "idhistorico": 253,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-14T19:44:24.802Z",
            "valorTotal": 106920
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-02T10:21:46.871Z"
    },
    {
        "idhistorico": 254,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-11T13:15:01.982Z",
            "valorTotal": 188676
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-10T08:18:19.050Z"
    },
    {
        "idhistorico": 255,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-15T18:02:59.211Z",
            "valorTotal": 244539
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-29T20:19:40.956Z"
    },
    {
        "idhistorico": 256,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-06-25T05:42:46.416Z",
            "valorTotal": 107594
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-02T10:20:11.764Z"
    },
    {
        "idhistorico": 257,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-15T17:19:13.180Z",
            "valorTotal": 204204
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-25T14:20:15.028Z"
    },
    {
        "idhistorico": 258,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-01T18:20:57.827Z",
            "valorTotal": 146055
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-15T15:41:10.957Z"
    },
    {
        "idhistorico": 259,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-06T17:38:15.410Z",
            "valorTotal": 169132
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-24T04:36:31.685Z"
    },
    {
        "idhistorico": 260,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-05-30T17:25:23.388Z",
            "valorTotal": 213158
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-11T22:48:57.039Z"
    },
    {
        "idhistorico": 261,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-24T16:13:45.274Z",
            "valorTotal": 101846
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-04T03:58:21.002Z"
    },
    {
        "idhistorico": 262,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-03T15:34:29.070Z",
            "valorTotal": 240141
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-04T09:04:52.786Z"
    },
    {
        "idhistorico": 263,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-25T22:14:18.897Z",
            "valorTotal": 46134
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-06T15:00:05.879Z"
    },
    {
        "idhistorico": 264,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-11T04:48:22.795Z",
            "valorTotal": 178502
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-19T06:19:34.660Z"
    },
    {
        "idhistorico": 265,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-29T07:30:10.881Z",
            "valorTotal": 97112
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-11T21:07:23.527Z"
    },
    {
        "idhistorico": 266,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-03-12T16:50:17.145Z",
            "valorTotal": 212449
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-30T01:31:35.113Z"
    },
    {
        "idhistorico": 267,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-05T16:10:41.692Z",
            "valorTotal": 24011
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-23T19:58:31.226Z"
    },
    {
        "idhistorico": 268,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-18T14:26:05.840Z",
            "valorTotal": 104290
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-29T00:40:58.215Z"
    },
    {
        "idhistorico": 269,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-28T15:32:18.060Z",
            "valorTotal": 41580
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-17T17:34:44.861Z"
    },
    {
        "idhistorico": 270,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-15T03:08:18.258Z",
            "valorTotal": 155463
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-31T01:14:44.501Z"
    },
    {
        "idhistorico": 271,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-08-03T05:20:54.303Z",
            "valorTotal": 122455
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-08T07:04:22.676Z"
    },
    {
        "idhistorico": 272,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-11T04:17:41.736Z",
            "valorTotal": 88747
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-27T19:06:37.789Z"
    },
    {
        "idhistorico": 273,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-20T06:00:06.622Z",
            "valorTotal": 216700
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-29T10:23:57.019Z"
    },
    {
        "idhistorico": 274,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-09T17:50:27.896Z",
            "valorTotal": 41892
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-07T11:54:42.819Z"
    },
    {
        "idhistorico": 275,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-31T19:12:00.355Z",
            "valorTotal": 177527
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-05T16:58:35.463Z"
    },
    {
        "idhistorico": 276,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-14T06:27:22.991Z",
            "valorTotal": 154888
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-17T05:34:46.565Z"
    },
    {
        "idhistorico": 277,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-28T00:55:43.632Z",
            "valorTotal": 173044
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-31T12:25:00.949Z"
    },
    {
        "idhistorico": 278,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-31T03:04:36.763Z",
            "valorTotal": 107185
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-30T05:55:51.554Z"
    },
    {
        "idhistorico": 279,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-03-04T17:00:15.763Z",
            "valorTotal": 59741
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-08T06:22:01.832Z"
    },
    {
        "idhistorico": 280,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-03-04T10:23:31.196Z",
            "valorTotal": 45961
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-03T23:53:10.119Z"
    },
    {
        "idhistorico": 281,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-06-28T19:35:47.911Z",
            "valorTotal": 32573
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-23T16:48:55.976Z"
    },
    {
        "idhistorico": 282,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-04-16T16:04:19.302Z",
            "valorTotal": 145431
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-01T12:44:25.371Z"
    },
    {
        "idhistorico": 283,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-04-25T18:12:58.463Z",
            "valorTotal": 79290
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-14T12:21:50.521Z"
    },
    {
        "idhistorico": 284,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-17T13:18:05.575Z",
            "valorTotal": 127602
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-08T01:14:24.245Z"
    },
    {
        "idhistorico": 285,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-23T07:54:28.696Z",
            "valorTotal": 81190
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-04T11:17:18.367Z"
    },
    {
        "idhistorico": 286,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-22T12:17:25.974Z",
            "valorTotal": 28160
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-08T00:05:37.304Z"
    },
    {
        "idhistorico": 287,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-03T10:20:50.813Z",
            "valorTotal": 151552
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-12T02:37:27.013Z"
    },
    {
        "idhistorico": 288,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-16T20:44:22.284Z",
            "valorTotal": 95569
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-17T00:46:33.087Z"
    },
    {
        "idhistorico": 289,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-04T09:19:20.294Z",
            "valorTotal": 198439
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-26T22:00:24.508Z"
    },
    {
        "idhistorico": 290,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-29T12:40:16.948Z",
            "valorTotal": 108450
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-22T14:42:04.422Z"
    },
    {
        "idhistorico": 291,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-03-22T16:59:25.102Z",
            "valorTotal": 232783
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-08T22:23:38.417Z"
    },
    {
        "idhistorico": 292,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-03-09T15:00:03.737Z",
            "valorTotal": 171151
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-24T05:50:56.961Z"
    },
    {
        "idhistorico": 293,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-14T20:30:29.181Z",
            "valorTotal": 67404
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-02T08:35:20.770Z"
    },
    {
        "idhistorico": 294,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-01T04:37:25.896Z",
            "valorTotal": 170068
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-20T20:32:32.416Z"
    },
    {
        "idhistorico": 295,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-08T01:04:57.531Z",
            "valorTotal": 65155
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-04T10:14:59.687Z"
    },
    {
        "idhistorico": 296,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-14T08:47:49.094Z",
            "valorTotal": 118293
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-23T07:40:45.160Z"
    },
    {
        "idhistorico": 297,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-23T18:59:42.932Z",
            "valorTotal": 57456
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-24T20:22:29.352Z"
    },
    {
        "idhistorico": 298,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-18T21:02:39.524Z",
            "valorTotal": 128498
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-10T21:06:17.648Z"
    },
    {
        "idhistorico": 299,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-10T23:14:14.113Z",
            "valorTotal": 82111
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-25T12:55:07.607Z"
    },
    {
        "idhistorico": 300,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-27T09:17:21.402Z",
            "valorTotal": 36140
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-02T17:28:48.479Z"
    },
    {
        "idhistorico": 301,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-28T01:19:09.404Z",
            "valorTotal": 212374
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-25T11:01:00.674Z"
    },
    {
        "idhistorico": 302,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-04T16:40:35.876Z",
            "valorTotal": 219465
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-08T22:58:52.149Z"
    },
    {
        "idhistorico": 303,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-23T13:39:46.887Z",
            "valorTotal": 46536
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-23T22:02:12.635Z"
    },
    {
        "idhistorico": 304,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-23T12:11:48.783Z",
            "valorTotal": 112332
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-20T02:52:30.187Z"
    },
    {
        "idhistorico": 305,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-17T02:44:08.258Z",
            "valorTotal": 81711
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-12T18:11:24.664Z"
    },
    {
        "idhistorico": 306,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-30T08:19:28.513Z",
            "valorTotal": 233922
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-19T03:45:52.732Z"
    },
    {
        "idhistorico": 307,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-22T03:48:26.004Z",
            "valorTotal": 94968
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-10T18:13:12.410Z"
    },
    {
        "idhistorico": 308,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-25T04:03:47.283Z",
            "valorTotal": 60288
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-16T04:16:45.956Z"
    },
    {
        "idhistorico": 309,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-31T10:01:30.253Z",
            "valorTotal": 71501
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-22T21:26:40.389Z"
    },
    {
        "idhistorico": 310,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-03T15:02:55.541Z",
            "valorTotal": 67889
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-12T07:08:44.841Z"
    },
    {
        "idhistorico": 311,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-13T17:18:22.389Z",
            "valorTotal": 143680
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-30T06:30:42.518Z"
    },
    {
        "idhistorico": 312,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-03-03T16:33:30.262Z",
            "valorTotal": 143983
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-14T12:47:50.708Z"
    },
    {
        "idhistorico": 313,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-14T22:17:22.710Z",
            "valorTotal": 164998
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-24T12:11:56.551Z"
    },
    {
        "idhistorico": 314,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-10T06:02:42.371Z",
            "valorTotal": 134513
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-26T15:31:34.733Z"
    },
    {
        "idhistorico": 315,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-15T23:41:36.884Z",
            "valorTotal": 138516
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-23T20:10:45.376Z"
    },
    {
        "idhistorico": 316,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-04-02T22:23:24.700Z",
            "valorTotal": 217608
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-13T04:50:32.233Z"
    },
    {
        "idhistorico": 317,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-02-26T05:53:13.575Z",
            "valorTotal": 143846
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-26T15:21:57.282Z"
    },
    {
        "idhistorico": 318,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-22T20:13:39.983Z",
            "valorTotal": 220774
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-13T17:22:11.667Z"
    },
    {
        "idhistorico": 319,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-08-01T00:37:48.648Z",
            "valorTotal": 172202
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-24T09:13:35.277Z"
    },
    {
        "idhistorico": 320,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-24T07:24:23.348Z",
            "valorTotal": 244150
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-29T05:52:00.974Z"
    },
    {
        "idhistorico": 321,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-11T11:26:45.180Z",
            "valorTotal": 79155
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-23T19:08:55.320Z"
    },
    {
        "idhistorico": 322,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-13T02:58:46.803Z",
            "valorTotal": 54268
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-09T22:09:27.674Z"
    },
    {
        "idhistorico": 323,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-08T22:01:17.549Z",
            "valorTotal": 73656
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-22T17:59:53.284Z"
    },
    {
        "idhistorico": 324,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-04-25T11:59:04.908Z",
            "valorTotal": 245939
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-13T03:36:24.130Z"
    },
    {
        "idhistorico": 325,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-07T23:37:02.452Z",
            "valorTotal": 92619
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-26T16:19:53.794Z"
    },
    {
        "idhistorico": 326,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-19T07:31:00.965Z",
            "valorTotal": 36581
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-03T17:26:15.166Z"
    },
    {
        "idhistorico": 327,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-18T13:54:16.684Z",
            "valorTotal": 172008
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-14T07:04:55.452Z"
    },
    {
        "idhistorico": 328,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-01-24T10:03:03.481Z",
            "valorTotal": 30193
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-10T08:42:36.829Z"
    },
    {
        "idhistorico": 329,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-08-06T21:21:46.247Z",
            "valorTotal": 92040
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-15T11:25:53.411Z"
    },
    {
        "idhistorico": 330,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-20T06:58:17.106Z",
            "valorTotal": 95742
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-28T17:13:43.038Z"
    },
    {
        "idhistorico": 331,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-31T12:15:20.830Z",
            "valorTotal": 135094
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-10T20:27:08.867Z"
    },
    {
        "idhistorico": 332,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-10T05:07:49.211Z",
            "valorTotal": 249531
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-09T17:46:23.937Z"
    },
    {
        "idhistorico": 333,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-28T15:46:31.309Z",
            "valorTotal": 93894
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-21T22:52:30.041Z"
    },
    {
        "idhistorico": 334,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-17T02:47:52.997Z",
            "valorTotal": 106263
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-24T15:46:31.233Z"
    },
    {
        "idhistorico": 335,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-01-22T10:01:44.802Z",
            "valorTotal": 225812
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-03T22:22:08.921Z"
    },
    {
        "idhistorico": 336,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-20T04:54:41.935Z",
            "valorTotal": 123046
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-12T05:06:06.054Z"
    },
    {
        "idhistorico": 337,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-09T08:41:17.510Z",
            "valorTotal": 74125
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-11T01:30:41.300Z"
    },
    {
        "idhistorico": 338,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-05-14T11:24:27.470Z",
            "valorTotal": 174001
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-01T21:15:01.929Z"
    },
    {
        "idhistorico": 339,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-11T05:02:41.142Z",
            "valorTotal": 197259
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-28T11:59:17.651Z"
    },
    {
        "idhistorico": 340,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-13T07:06:42.669Z",
            "valorTotal": 47646
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-25T09:27:11.393Z"
    },
    {
        "idhistorico": 341,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-28T00:26:45.767Z",
            "valorTotal": 216902
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-11T22:33:57.697Z"
    },
    {
        "idhistorico": 342,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-05-18T01:52:39.217Z",
            "valorTotal": 122487
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-03T06:43:45.243Z"
    },
    {
        "idhistorico": 343,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-01-04T20:58:16.257Z",
            "valorTotal": 147589
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-08T13:52:50.406Z"
    },
    {
        "idhistorico": 344,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-16T22:23:25.887Z",
            "valorTotal": 24206
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-18T21:06:48.753Z"
    },
    {
        "idhistorico": 345,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-08-10T09:10:07.602Z",
            "valorTotal": 23920
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-07T14:08:45.593Z"
    },
    {
        "idhistorico": 346,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-07-02T18:53:24.593Z",
            "valorTotal": 85052
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-19T09:42:22.075Z"
    },
    {
        "idhistorico": 347,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-05-02T13:07:15.525Z",
            "valorTotal": 99525
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-12T05:51:59.338Z"
    },
    {
        "idhistorico": 348,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-05T00:11:34.610Z",
            "valorTotal": 142100
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-22T03:40:45.194Z"
    },
    {
        "idhistorico": 349,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-16T01:44:40.322Z",
            "valorTotal": 90593
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-11T23:50:45.820Z"
    },
    {
        "idhistorico": 350,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-08-07T03:28:24.300Z",
            "valorTotal": 192787
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-04T20:15:01.335Z"
    },
    {
        "idhistorico": 351,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-06-12T17:59:27.413Z",
            "valorTotal": 128069
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-02T00:38:03.947Z"
    },
    {
        "idhistorico": 352,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-12T04:28:10.974Z",
            "valorTotal": 50657
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-08T07:29:36.982Z"
    },
    {
        "idhistorico": 353,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-18T06:40:07.462Z",
            "valorTotal": 63459
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-16T14:25:41.880Z"
    },
    {
        "idhistorico": 354,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-03-02T17:34:52.726Z",
            "valorTotal": 209855
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-17T13:33:02.699Z"
    },
    {
        "idhistorico": 355,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-16T04:48:20.341Z",
            "valorTotal": 119995
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-15T20:52:18.691Z"
    },
    {
        "idhistorico": 356,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-22T18:14:18.849Z",
            "valorTotal": 230644
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-26T20:29:05.969Z"
    },
    {
        "idhistorico": 357,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-06T19:17:50.920Z",
            "valorTotal": 140418
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-12T02:08:10.973Z"
    },
    {
        "idhistorico": 358,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-24T16:21:27.944Z",
            "valorTotal": 182236
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-13T10:41:11.924Z"
    },
    {
        "idhistorico": 359,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-05-29T18:00:10.224Z",
            "valorTotal": 177141
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-29T14:03:23.372Z"
    },
    {
        "idhistorico": 360,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-09T14:23:06.891Z",
            "valorTotal": 243268
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-21T01:58:56.224Z"
    },
    {
        "idhistorico": 361,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-06T00:57:02.225Z",
            "valorTotal": 110643
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-27T21:42:41.057Z"
    },
    {
        "idhistorico": 362,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-07T13:58:40.318Z",
            "valorTotal": 199146
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-02T15:57:25.993Z"
    },
    {
        "idhistorico": 363,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-30T06:24:35.487Z",
            "valorTotal": 118330
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-16T12:06:04.890Z"
    },
    {
        "idhistorico": 364,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-02T23:10:29.495Z",
            "valorTotal": 110383
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-09T09:44:06.659Z"
    },
    {
        "idhistorico": 365,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-25T18:34:49.194Z",
            "valorTotal": 127944
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-20T12:08:43.706Z"
    },
    {
        "idhistorico": 366,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-08-12T04:32:47.495Z",
            "valorTotal": 108395
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-01T18:00:58.217Z"
    },
    {
        "idhistorico": 367,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-05T06:35:46.285Z",
            "valorTotal": 82832
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-16T14:07:07.961Z"
    },
    {
        "idhistorico": 368,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-30T23:34:40.186Z",
            "valorTotal": 146765
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-24T20:56:19.469Z"
    },
    {
        "idhistorico": 369,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-01-16T16:35:59.628Z",
            "valorTotal": 97796
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-14T18:43:43.938Z"
    },
    {
        "idhistorico": 370,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-17T15:24:08.926Z",
            "valorTotal": 244926
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-22T18:17:55.375Z"
    },
    {
        "idhistorico": 371,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-01-21T01:18:51.942Z",
            "valorTotal": 97429
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-10T10:21:21.278Z"
    },
    {
        "idhistorico": 372,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-10T18:11:54.528Z",
            "valorTotal": 88163
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-02T10:16:26.824Z"
    },
    {
        "idhistorico": 373,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-16T06:44:09.782Z",
            "valorTotal": 170117
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-24T18:57:48.469Z"
    },
    {
        "idhistorico": 374,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-11T22:06:01.560Z",
            "valorTotal": 54492
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-15T21:31:28.128Z"
    },
    {
        "idhistorico": 375,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-19T16:29:23.866Z",
            "valorTotal": 24945
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-20T05:46:45.752Z"
    },
    {
        "idhistorico": 376,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-01T21:07:59.768Z",
            "valorTotal": 173078
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-25T06:00:40.893Z"
    },
    {
        "idhistorico": 377,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-19T05:25:25.227Z",
            "valorTotal": 154386
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-23T17:46:51.934Z"
    },
    {
        "idhistorico": 378,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-08-11T18:15:44.900Z",
            "valorTotal": 82250
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-30T08:30:00.016Z"
    },
    {
        "idhistorico": 379,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-28T16:02:33.704Z",
            "valorTotal": 181619
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-27T23:14:15.569Z"
    },
    {
        "idhistorico": 380,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-17T22:13:57.286Z",
            "valorTotal": 63670
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-16T12:55:24.314Z"
    },
    {
        "idhistorico": 381,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-10T08:10:20.932Z",
            "valorTotal": 242086
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-16T13:51:26.890Z"
    },
    {
        "idhistorico": 382,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-30T21:17:40.804Z",
            "valorTotal": 31924
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-21T10:39:49.925Z"
    },
    {
        "idhistorico": 383,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-01-22T03:38:51.252Z",
            "valorTotal": 70371
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-10T04:19:01.169Z"
    },
    {
        "idhistorico": 384,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-30T15:17:34.928Z",
            "valorTotal": 92048
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-02T15:56:28.241Z"
    },
    {
        "idhistorico": 385,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-07-24T01:28:42.935Z",
            "valorTotal": 236068
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-16T20:34:13.962Z"
    },
    {
        "idhistorico": 386,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-19T03:11:21.814Z",
            "valorTotal": 56181
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-29T06:26:06.398Z"
    },
    {
        "idhistorico": 387,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-24T18:25:12.198Z",
            "valorTotal": 79583
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-19T02:31:52.138Z"
    },
    {
        "idhistorico": 388,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-10T09:21:54.103Z",
            "valorTotal": 76080
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-11T01:11:23.408Z"
    },
    {
        "idhistorico": 389,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-28T21:25:57.382Z",
            "valorTotal": 42228
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-02T03:15:42.996Z"
    },
    {
        "idhistorico": 390,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-04T09:42:16.741Z",
            "valorTotal": 46182
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-28T00:25:55.321Z"
    },
    {
        "idhistorico": 391,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-11T08:52:42.680Z",
            "valorTotal": 186145
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-28T23:31:02.400Z"
    },
    {
        "idhistorico": 392,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-18T20:28:58.946Z",
            "valorTotal": 215600
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-05T13:42:51.565Z"
    },
    {
        "idhistorico": 393,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-22T10:29:45.241Z",
            "valorTotal": 191001
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-18T06:48:21.873Z"
    },
    {
        "idhistorico": 394,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-29T04:56:29.104Z",
            "valorTotal": 113230
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-30T07:21:22.285Z"
    },
    {
        "idhistorico": 395,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-04-21T05:17:49.014Z",
            "valorTotal": 141869
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-27T06:41:53.889Z"
    },
    {
        "idhistorico": 396,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-05T20:38:47.563Z",
            "valorTotal": 140669
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-26T20:25:44.311Z"
    },
    {
        "idhistorico": 397,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-30T19:52:42.412Z",
            "valorTotal": 88457
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-01T08:23:58.041Z"
    },
    {
        "idhistorico": 398,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-16T05:59:59.621Z",
            "valorTotal": 226372
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-17T10:07:31.781Z"
    },
    {
        "idhistorico": 399,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-21T17:33:43.274Z",
            "valorTotal": 140976
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-15T14:57:49.506Z"
    },
    {
        "idhistorico": 400,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-30T09:42:57.364Z",
            "valorTotal": 50259
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-26T13:10:35.502Z"
    },
    {
        "idhistorico": 401,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-26T14:21:43.907Z",
            "valorTotal": 39537
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-02T07:14:59.863Z"
    },
    {
        "idhistorico": 402,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-13T05:07:07.276Z",
            "valorTotal": 244034
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-10T18:57:47.046Z"
    },
    {
        "idhistorico": 403,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-21T12:33:01.580Z",
            "valorTotal": 248553
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-27T04:48:45.975Z"
    },
    {
        "idhistorico": 404,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-03T07:48:14.178Z",
            "valorTotal": 243143
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-16T03:56:47.257Z"
    },
    {
        "idhistorico": 405,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-05-03T09:55:55.462Z",
            "valorTotal": 232372
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-31T05:17:20.967Z"
    },
    {
        "idhistorico": 406,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-23T08:54:24.270Z",
            "valorTotal": 172935
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-05T07:20:47.874Z"
    },
    {
        "idhistorico": 407,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-04T08:54:28.844Z",
            "valorTotal": 84875
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-17T00:10:40.094Z"
    },
    {
        "idhistorico": 408,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-01T04:37:37.189Z",
            "valorTotal": 35605
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-18T05:41:09.539Z"
    },
    {
        "idhistorico": 409,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-08T09:56:24.432Z",
            "valorTotal": 207562
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-18T23:22:03.945Z"
    },
    {
        "idhistorico": 410,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-05T22:38:20.353Z",
            "valorTotal": 191615
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-18T16:47:01.371Z"
    },
    {
        "idhistorico": 411,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-26T12:59:18.429Z",
            "valorTotal": 155890
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-02T21:31:35.766Z"
    },
    {
        "idhistorico": 412,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-11T23:22:07.756Z",
            "valorTotal": 147650
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-30T23:27:06.111Z"
    },
    {
        "idhistorico": 413,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-02T06:54:29.092Z",
            "valorTotal": 102101
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-01T15:57:36.428Z"
    },
    {
        "idhistorico": 414,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-08T22:36:04.175Z",
            "valorTotal": 91678
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-03T11:50:11.278Z"
    },
    {
        "idhistorico": 415,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-04T16:05:03.442Z",
            "valorTotal": 200892
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-02T11:24:34.605Z"
    },
    {
        "idhistorico": 416,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-01T07:48:49.209Z",
            "valorTotal": 73366
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-27T18:19:48.746Z"
    },
    {
        "idhistorico": 417,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-21T20:56:53.642Z",
            "valorTotal": 109722
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-19T18:32:31.368Z"
    },
    {
        "idhistorico": 418,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-23T13:11:24.790Z",
            "valorTotal": 129873
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-15T23:40:21.871Z"
    },
    {
        "idhistorico": 419,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-04-20T11:21:28.489Z",
            "valorTotal": 112889
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-03T03:04:29.953Z"
    },
    {
        "idhistorico": 420,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-14T13:27:23.926Z",
            "valorTotal": 185340
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-22T20:49:01.688Z"
    },
    {
        "idhistorico": 421,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-03T13:38:45.416Z",
            "valorTotal": 246903
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-09T09:32:53.332Z"
    },
    {
        "idhistorico": 422,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-03T18:13:40.602Z",
            "valorTotal": 185721
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-07T13:58:45.552Z"
    },
    {
        "idhistorico": 423,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-14T19:02:58.140Z",
            "valorTotal": 158095
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-01T03:45:05.540Z"
    },
    {
        "idhistorico": 424,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-15T17:05:24.912Z",
            "valorTotal": 131036
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-16T16:36:11.767Z"
    },
    {
        "idhistorico": 425,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-08T20:53:48.339Z",
            "valorTotal": 48025
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-09T20:50:25.175Z"
    },
    {
        "idhistorico": 426,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-26T19:21:41.604Z",
            "valorTotal": 247857
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-30T15:05:23.505Z"
    },
    {
        "idhistorico": 427,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-10T20:05:52.844Z",
            "valorTotal": 99777
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-24T03:01:27.682Z"
    },
    {
        "idhistorico": 428,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-19T00:06:37.468Z",
            "valorTotal": 225556
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-22T20:03:41.810Z"
    },
    {
        "idhistorico": 429,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-10T20:44:06.668Z",
            "valorTotal": 113230
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-06T14:57:32.013Z"
    },
    {
        "idhistorico": 430,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-11T21:23:20.055Z",
            "valorTotal": 180733
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-06T04:42:52.070Z"
    },
    {
        "idhistorico": 431,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-09T16:50:29.743Z",
            "valorTotal": 140468
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-16T19:45:38.295Z"
    },
    {
        "idhistorico": 432,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-01-08T21:33:17.773Z",
            "valorTotal": 207800
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-10T09:52:28.136Z"
    },
    {
        "idhistorico": 433,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-25T02:19:42.486Z",
            "valorTotal": 49283
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-31T05:40:20.621Z"
    },
    {
        "idhistorico": 434,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-03T19:57:03.881Z",
            "valorTotal": 123295
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-20T04:31:40.895Z"
    },
    {
        "idhistorico": 435,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-08T07:52:42.512Z",
            "valorTotal": 77545
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-23T13:09:43.859Z"
    },
    {
        "idhistorico": 436,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-10T11:50:19.282Z",
            "valorTotal": 218366
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-13T10:15:48.028Z"
    },
    {
        "idhistorico": 437,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-04-07T10:18:10.133Z",
            "valorTotal": 197921
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-17T11:05:24.578Z"
    },
    {
        "idhistorico": 438,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-05T23:19:09.544Z",
            "valorTotal": 105289
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-12T04:53:42.032Z"
    },
    {
        "idhistorico": 439,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-08-10T06:00:07.930Z",
            "valorTotal": 136788
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-29T17:45:58.290Z"
    },
    {
        "idhistorico": 440,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-20T05:19:21.032Z",
            "valorTotal": 78888
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-21T16:29:10.141Z"
    },
    {
        "idhistorico": 441,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-05T01:34:50.780Z",
            "valorTotal": 128310
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-06T17:33:50.843Z"
    },
    {
        "idhistorico": 442,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-27T09:01:11.414Z",
            "valorTotal": 32423
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-17T08:14:21.966Z"
    },
    {
        "idhistorico": 443,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-12T10:33:24.769Z",
            "valorTotal": 58824
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-28T06:07:58.887Z"
    },
    {
        "idhistorico": 444,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-27T11:21:47.675Z",
            "valorTotal": 54962
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-02T02:08:20.967Z"
    },
    {
        "idhistorico": 445,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-04T11:39:11.492Z",
            "valorTotal": 65080
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-22T06:51:35.936Z"
    },
    {
        "idhistorico": 446,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-29T23:14:30.757Z",
            "valorTotal": 30594
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-10T22:32:57.325Z"
    },
    {
        "idhistorico": 447,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-05T12:28:55.827Z",
            "valorTotal": 135033
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-01T15:04:10.051Z"
    },
    {
        "idhistorico": 448,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-01-15T12:07:42.107Z",
            "valorTotal": 119395
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-13T22:54:05.925Z"
    },
    {
        "idhistorico": 449,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-21T07:57:39.309Z",
            "valorTotal": 106487
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-27T13:35:44.060Z"
    },
    {
        "idhistorico": 450,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-27T05:47:19.572Z",
            "valorTotal": 43433
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-09T17:25:34.798Z"
    },
    {
        "idhistorico": 451,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-10T20:15:14.092Z",
            "valorTotal": 145779
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-14T04:02:43.928Z"
    },
    {
        "idhistorico": 452,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-24T02:47:53.721Z",
            "valorTotal": 97199
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-29T01:37:03.228Z"
    },
    {
        "idhistorico": 453,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-07T11:13:50.048Z",
            "valorTotal": 30790
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-14T02:16:55.361Z"
    },
    {
        "idhistorico": 454,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-07T10:12:34.381Z",
            "valorTotal": 28121
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-14T08:45:32.541Z"
    },
    {
        "idhistorico": 455,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-23T11:55:14.257Z",
            "valorTotal": 207760
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-19T20:49:56.025Z"
    },
    {
        "idhistorico": 456,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-23T12:57:03.804Z",
            "valorTotal": 125009
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-03T18:13:34.093Z"
    },
    {
        "idhistorico": 457,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-08T18:04:44.645Z",
            "valorTotal": 136060
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-27T13:51:49.982Z"
    },
    {
        "idhistorico": 458,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-08-06T04:27:27.084Z",
            "valorTotal": 57174
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-08T21:34:36.483Z"
    },
    {
        "idhistorico": 459,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-14T10:00:16.302Z",
            "valorTotal": 179297
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-24T18:25:21.604Z"
    },
    {
        "idhistorico": 460,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-31T14:36:42.066Z",
            "valorTotal": 39192
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-08T20:20:30.054Z"
    },
    {
        "idhistorico": 461,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-21T05:08:36.309Z",
            "valorTotal": 22602
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-13T11:20:56.314Z"
    },
    {
        "idhistorico": 462,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-01T05:03:10.536Z",
            "valorTotal": 157544
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-22T03:51:16.783Z"
    },
    {
        "idhistorico": 463,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-11T16:40:40.959Z",
            "valorTotal": 26250
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-07T14:02:36.270Z"
    },
    {
        "idhistorico": 464,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-22T21:59:21.307Z",
            "valorTotal": 245419
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-07T20:03:55.131Z"
    },
    {
        "idhistorico": 465,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-10T21:18:37.639Z",
            "valorTotal": 89590
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-14T19:22:18.531Z"
    },
    {
        "idhistorico": 466,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-07T06:25:06.550Z",
            "valorTotal": 74971
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-12T12:21:23.756Z"
    },
    {
        "idhistorico": 467,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-03T17:01:47.997Z",
            "valorTotal": 69507
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-31T00:17:38.679Z"
    },
    {
        "idhistorico": 468,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-08-08T06:10:15.417Z",
            "valorTotal": 45166
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-05T10:01:30.500Z"
    },
    {
        "idhistorico": 469,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-02-13T16:00:14.352Z",
            "valorTotal": 50247
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-26T10:31:18.011Z"
    },
    {
        "idhistorico": 470,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-04T08:31:18.997Z",
            "valorTotal": 191841
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-22T22:19:11.073Z"
    },
    {
        "idhistorico": 471,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-22T06:13:05.327Z",
            "valorTotal": 175613
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-28T08:06:44.338Z"
    },
    {
        "idhistorico": 472,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-24T06:39:47.669Z",
            "valorTotal": 34170
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-15T16:40:57.249Z"
    },
    {
        "idhistorico": 473,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-24T20:40:49.177Z",
            "valorTotal": 131685
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-11T09:49:09.444Z"
    },
    {
        "idhistorico": 474,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-19T07:07:29.836Z",
            "valorTotal": 27481
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-28T18:26:26.952Z"
    },
    {
        "idhistorico": 475,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-04-09T14:27:23.173Z",
            "valorTotal": 139935
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-21T14:45:16.197Z"
    },
    {
        "idhistorico": 476,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-16T14:58:06.287Z",
            "valorTotal": 119480
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-12T23:41:48.867Z"
    },
    {
        "idhistorico": 477,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-24T02:48:39.500Z",
            "valorTotal": 221441
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-20T11:02:32.638Z"
    },
    {
        "idhistorico": 478,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-24T17:00:49.670Z",
            "valorTotal": 83253
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-17T19:27:18.089Z"
    },
    {
        "idhistorico": 479,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-27T06:13:41.252Z",
            "valorTotal": 53138
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-27T11:15:17.976Z"
    },
    {
        "idhistorico": 480,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-16T17:43:42.581Z",
            "valorTotal": 173246
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-05T17:02:25.062Z"
    },
    {
        "idhistorico": 481,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-28T02:26:11.840Z",
            "valorTotal": 233065
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-23T18:12:08.074Z"
    },
    {
        "idhistorico": 482,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-07-17T09:14:06.697Z",
            "valorTotal": 33196
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-15T00:40:35.462Z"
    },
    {
        "idhistorico": 483,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-27T04:19:39.597Z",
            "valorTotal": 71878
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-28T06:23:05.682Z"
    },
    {
        "idhistorico": 484,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-02T02:30:24.583Z",
            "valorTotal": 68811
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-11T14:27:13.203Z"
    },
    {
        "idhistorico": 485,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-31T04:28:28.637Z",
            "valorTotal": 222410
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-29T09:20:00.625Z"
    },
    {
        "idhistorico": 486,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-04-05T23:56:24.415Z",
            "valorTotal": 26469
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-12T03:51:27.264Z"
    },
    {
        "idhistorico": 487,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-31T18:58:06.967Z",
            "valorTotal": 100728
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-13T08:56:11.497Z"
    },
    {
        "idhistorico": 488,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-05T02:59:13.293Z",
            "valorTotal": 29180
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-20T20:20:35.911Z"
    },
    {
        "idhistorico": 489,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-11T04:31:53.132Z",
            "valorTotal": 243730
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-06T00:12:37.262Z"
    },
    {
        "idhistorico": 490,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-05-27T02:50:44.143Z",
            "valorTotal": 229276
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-15T03:14:30.526Z"
    },
    {
        "idhistorico": 491,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-19T05:35:26.316Z",
            "valorTotal": 58688
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-27T06:03:27.647Z"
    },
    {
        "idhistorico": 492,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-07T11:35:04.175Z",
            "valorTotal": 127467
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-20T16:07:42.164Z"
    },
    {
        "idhistorico": 493,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-12T10:08:27.206Z",
            "valorTotal": 39244
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-25T16:20:54.209Z"
    },
    {
        "idhistorico": 494,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-29T10:51:28.421Z",
            "valorTotal": 70694
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-09T13:54:08.509Z"
    },
    {
        "idhistorico": 495,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-01-14T09:22:34.917Z",
            "valorTotal": 30496
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-17T18:21:13.817Z"
    },
    {
        "idhistorico": 496,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-19T09:28:48.805Z",
            "valorTotal": 49782
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-31T23:39:20.498Z"
    },
    {
        "idhistorico": 497,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-10T01:26:05.294Z",
            "valorTotal": 104927
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-12T18:02:32.194Z"
    },
    {
        "idhistorico": 498,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-04T09:30:33.965Z",
            "valorTotal": 55318
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-07T17:27:39.303Z"
    },
    {
        "idhistorico": 499,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-12T06:16:23.869Z",
            "valorTotal": 215627
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-09T22:03:56.105Z"
    },
    {
        "idhistorico": 500,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-01T18:54:58.537Z",
            "valorTotal": 127668
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-25T03:17:37.531Z"
    },
    {
        "idhistorico": 501,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-30T05:24:46.220Z",
            "valorTotal": 116995
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-02T21:13:25.169Z"
    },
    {
        "idhistorico": 502,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-01-04T21:23:57.144Z",
            "valorTotal": 163640
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-25T10:40:03.816Z"
    },
    {
        "idhistorico": 503,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-21T08:08:52.154Z",
            "valorTotal": 169116
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-04T06:20:05.637Z"
    },
    {
        "idhistorico": 504,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-25T20:17:43.829Z",
            "valorTotal": 46429
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-19T20:11:39.712Z"
    },
    {
        "idhistorico": 505,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-06-18T19:51:53.455Z",
            "valorTotal": 201421
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-16T06:11:10.944Z"
    },
    {
        "idhistorico": 506,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-30T11:32:36.605Z",
            "valorTotal": 216158
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-05T18:42:27.073Z"
    },
    {
        "idhistorico": 507,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-20T11:56:41.169Z",
            "valorTotal": 179523
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-26T00:28:39.281Z"
    },
    {
        "idhistorico": 508,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-01-13T09:55:29.303Z",
            "valorTotal": 136855
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-05T21:09:30.956Z"
    },
    {
        "idhistorico": 509,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-06-15T03:46:20.506Z",
            "valorTotal": 52253
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-06T15:31:35.049Z"
    },
    {
        "idhistorico": 510,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-08-06T19:42:38.941Z",
            "valorTotal": 187711
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-01T15:58:44.913Z"
    },
    {
        "idhistorico": 511,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-27T17:22:42.093Z",
            "valorTotal": 131199
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-31T19:24:05.848Z"
    },
    {
        "idhistorico": 512,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-03T01:54:38.820Z",
            "valorTotal": 93529
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-09T19:31:52.459Z"
    },
    {
        "idhistorico": 513,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-03-21T16:07:00.300Z",
            "valorTotal": 215207
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-09T03:00:22.214Z"
    },
    {
        "idhistorico": 514,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-24T20:22:00.524Z",
            "valorTotal": 205555
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-01T13:06:31.446Z"
    },
    {
        "idhistorico": 515,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-01T12:17:44.877Z",
            "valorTotal": 136803
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-26T22:16:00.412Z"
    },
    {
        "idhistorico": 516,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-28T09:56:28.345Z",
            "valorTotal": 236197
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-08T07:21:21.274Z"
    },
    {
        "idhistorico": 517,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-05T06:02:17.107Z",
            "valorTotal": 39953
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-30T12:37:39.160Z"
    },
    {
        "idhistorico": 518,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-18T00:34:28.298Z",
            "valorTotal": 182102
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-07T04:11:47.439Z"
    },
    {
        "idhistorico": 519,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-03T17:32:52.052Z",
            "valorTotal": 142459
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-27T16:59:02.776Z"
    },
    {
        "idhistorico": 520,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-27T01:24:16.577Z",
            "valorTotal": 97744
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-27T07:50:55.658Z"
    },
    {
        "idhistorico": 521,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-09T09:27:21.138Z",
            "valorTotal": 140135
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-09T04:16:25.661Z"
    },
    {
        "idhistorico": 522,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-08T06:47:13.955Z",
            "valorTotal": 49319
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-18T09:36:55.114Z"
    },
    {
        "idhistorico": 523,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-16T09:51:10.628Z",
            "valorTotal": 210520
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-08T06:19:05.819Z"
    },
    {
        "idhistorico": 524,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-09T07:32:27.860Z",
            "valorTotal": 198830
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-20T10:15:13.051Z"
    },
    {
        "idhistorico": 525,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-17T04:53:13.134Z",
            "valorTotal": 142240
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-23T17:55:55.933Z"
    },
    {
        "idhistorico": 526,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-21T19:34:33.261Z",
            "valorTotal": 171451
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-26T18:16:26.391Z"
    },
    {
        "idhistorico": 527,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-06T12:41:45.726Z",
            "valorTotal": 156529
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-29T00:21:03.682Z"
    },
    {
        "idhistorico": 528,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-21T14:41:06.066Z",
            "valorTotal": 120083
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-24T18:30:32.293Z"
    },
    {
        "idhistorico": 529,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-18T00:37:53.327Z",
            "valorTotal": 70332
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-03T19:41:08.635Z"
    },
    {
        "idhistorico": 530,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-27T04:21:33.049Z",
            "valorTotal": 173172
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-14T21:37:56.844Z"
    },
    {
        "idhistorico": 531,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-12T20:05:37.888Z",
            "valorTotal": 222636
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-04T09:51:33.812Z"
    },
    {
        "idhistorico": 532,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-19T07:12:02.574Z",
            "valorTotal": 146449
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-12T09:42:31.075Z"
    },
    {
        "idhistorico": 533,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-05-30T04:15:10.692Z",
            "valorTotal": 83243
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-16T09:37:29.649Z"
    },
    {
        "idhistorico": 534,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-07T17:58:23.084Z",
            "valorTotal": 68478
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-16T17:57:13.176Z"
    },
    {
        "idhistorico": 535,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-04T20:23:11.486Z",
            "valorTotal": 148121
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-26T20:58:59.181Z"
    },
    {
        "idhistorico": 536,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-04-13T08:05:27.762Z",
            "valorTotal": 207580
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-05T03:48:13.715Z"
    },
    {
        "idhistorico": 537,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-16T06:41:37.708Z",
            "valorTotal": 37787
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-06T13:51:37.413Z"
    },
    {
        "idhistorico": 538,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-28T05:23:17.604Z",
            "valorTotal": 217093
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-13T01:18:43.419Z"
    },
    {
        "idhistorico": 539,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-22T04:01:46.082Z",
            "valorTotal": 164265
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-04T14:03:47.099Z"
    },
    {
        "idhistorico": 540,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-27T11:41:40.771Z",
            "valorTotal": 161277
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-27T01:35:26.856Z"
    },
    {
        "idhistorico": 541,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-30T20:27:54.707Z",
            "valorTotal": 49858
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-08T00:16:26.220Z"
    },
    {
        "idhistorico": 542,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-06-27T15:06:40.403Z",
            "valorTotal": 49392
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-04T13:33:09.403Z"
    },
    {
        "idhistorico": 543,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-13T23:57:36.307Z",
            "valorTotal": 90576
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-13T15:17:22.504Z"
    },
    {
        "idhistorico": 544,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-18T04:11:47.833Z",
            "valorTotal": 205152
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-17T21:51:02.634Z"
    },
    {
        "idhistorico": 545,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-08T22:40:46.773Z",
            "valorTotal": 221376
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-01T13:18:54.406Z"
    },
    {
        "idhistorico": 546,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-25T15:41:46.268Z",
            "valorTotal": 145864
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-20T11:45:18.178Z"
    },
    {
        "idhistorico": 547,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-19T10:19:47.472Z",
            "valorTotal": 234919
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-28T16:06:20.096Z"
    },
    {
        "idhistorico": 548,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-28T11:17:00.588Z",
            "valorTotal": 33138
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-04T11:40:01.580Z"
    },
    {
        "idhistorico": 549,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-25T08:40:28.626Z",
            "valorTotal": 148295
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-27T07:32:21.176Z"
    },
    {
        "idhistorico": 550,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-03T07:45:16.262Z",
            "valorTotal": 33985
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-28T12:26:46.440Z"
    },
    {
        "idhistorico": 551,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-29T12:25:31.923Z",
            "valorTotal": 244273
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-24T18:24:29.378Z"
    },
    {
        "idhistorico": 552,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-28T17:38:01.356Z",
            "valorTotal": 204942
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-29T06:08:31.760Z"
    },
    {
        "idhistorico": 553,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-08-09T13:05:30.160Z",
            "valorTotal": 188668
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-16T10:22:38.213Z"
    },
    {
        "idhistorico": 554,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-18T08:47:41.823Z",
            "valorTotal": 104237
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-03T07:42:15.291Z"
    },
    {
        "idhistorico": 555,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-21T18:30:11.567Z",
            "valorTotal": 175020
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-07T06:32:02.840Z"
    },
    {
        "idhistorico": 556,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-04T06:20:16.431Z",
            "valorTotal": 43458
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-05T13:06:14.253Z"
    },
    {
        "idhistorico": 557,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-05-14T09:05:09.139Z",
            "valorTotal": 34454
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-13T01:59:19.727Z"
    },
    {
        "idhistorico": 558,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-23T06:08:51.531Z",
            "valorTotal": 211492
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-12T13:26:26.877Z"
    },
    {
        "idhistorico": 559,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-08-09T23:31:12.461Z",
            "valorTotal": 45649
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-01T02:09:45.922Z"
    },
    {
        "idhistorico": 560,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-15T21:56:37.357Z",
            "valorTotal": 27615
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-02T13:29:23.629Z"
    },
    {
        "idhistorico": 561,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-05T16:27:16.014Z",
            "valorTotal": 216115
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-18T23:57:53.235Z"
    },
    {
        "idhistorico": 562,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-07-31T10:30:51.421Z",
            "valorTotal": 243395
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-25T09:17:16.637Z"
    },
    {
        "idhistorico": 563,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-01T02:14:23.113Z",
            "valorTotal": 118645
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-22T18:12:34.018Z"
    },
    {
        "idhistorico": 564,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-28T10:38:27.675Z",
            "valorTotal": 27977
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-23T07:00:44.944Z"
    },
    {
        "idhistorico": 565,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-03-14T19:56:10.319Z",
            "valorTotal": 111397
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-28T04:44:39.973Z"
    },
    {
        "idhistorico": 566,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-05T07:34:29.273Z",
            "valorTotal": 41712
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-12T15:03:28.718Z"
    },
    {
        "idhistorico": 567,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-05-05T18:31:56.638Z",
            "valorTotal": 150098
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-02T19:27:36.638Z"
    },
    {
        "idhistorico": 568,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-02T10:43:00.810Z",
            "valorTotal": 247823
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-15T15:41:51.213Z"
    },
    {
        "idhistorico": 569,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-05-20T01:57:01.713Z",
            "valorTotal": 51112
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-16T14:20:47.519Z"
    },
    {
        "idhistorico": 570,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-21T16:34:11.949Z",
            "valorTotal": 149226
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-30T21:04:31.252Z"
    },
    {
        "idhistorico": 571,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-17T14:29:20.077Z",
            "valorTotal": 158255
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-05T19:55:20.160Z"
    },
    {
        "idhistorico": 572,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-01-27T13:34:48.035Z",
            "valorTotal": 147677
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-26T07:31:31.609Z"
    },
    {
        "idhistorico": 573,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-03T09:47:52.884Z",
            "valorTotal": 201932
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-08T16:08:11.637Z"
    },
    {
        "idhistorico": 574,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-01T02:33:27.120Z",
            "valorTotal": 142111
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-06T20:43:26.945Z"
    },
    {
        "idhistorico": 575,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-23T21:28:50.417Z",
            "valorTotal": 132571
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-02T17:45:35.806Z"
    },
    {
        "idhistorico": 576,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-18T04:56:34.484Z",
            "valorTotal": 213707
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-01T05:45:16.593Z"
    },
    {
        "idhistorico": 577,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-02T06:40:35.270Z",
            "valorTotal": 217830
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-29T02:39:46.668Z"
    },
    {
        "idhistorico": 578,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-16T07:40:04.979Z",
            "valorTotal": 244805
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-06T05:28:26.993Z"
    },
    {
        "idhistorico": 579,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-29T15:05:10.004Z",
            "valorTotal": 214991
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-11T04:22:46.548Z"
    },
    {
        "idhistorico": 580,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-11T15:44:37.398Z",
            "valorTotal": 149584
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-19T14:38:12.884Z"
    },
    {
        "idhistorico": 581,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-08-08T14:52:35.280Z",
            "valorTotal": 87305
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-07T10:26:51.550Z"
    },
    {
        "idhistorico": 582,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-30T23:55:39.653Z",
            "valorTotal": 106727
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-11T17:31:37.273Z"
    },
    {
        "idhistorico": 583,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-08-10T07:30:37.058Z",
            "valorTotal": 245424
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-27T07:13:39.822Z"
    },
    {
        "idhistorico": 584,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-14T19:00:05.747Z",
            "valorTotal": 115694
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-24T11:31:32.490Z"
    },
    {
        "idhistorico": 585,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-15T05:19:30.103Z",
            "valorTotal": 103815
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-31T03:26:21.579Z"
    },
    {
        "idhistorico": 586,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-21T01:15:11.756Z",
            "valorTotal": 188845
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-01T07:18:32.367Z"
    },
    {
        "idhistorico": 587,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-06-24T00:29:07.613Z",
            "valorTotal": 146901
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-25T17:35:59.806Z"
    },
    {
        "idhistorico": 588,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-29T09:31:10.853Z",
            "valorTotal": 62946
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-24T05:24:34.540Z"
    },
    {
        "idhistorico": 589,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-15T03:50:35.188Z",
            "valorTotal": 104486
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-15T10:56:22.210Z"
    },
    {
        "idhistorico": 590,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-01-13T16:59:04.636Z",
            "valorTotal": 38915
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-20T21:59:41.789Z"
    },
    {
        "idhistorico": 591,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-16T09:21:20.362Z",
            "valorTotal": 20802
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-25T20:02:47.431Z"
    },
    {
        "idhistorico": 592,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-04T19:56:45.860Z",
            "valorTotal": 178032
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-26T23:28:44.448Z"
    },
    {
        "idhistorico": 593,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-19T23:28:42.863Z",
            "valorTotal": 70867
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-22T12:59:06.344Z"
    },
    {
        "idhistorico": 594,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-22T06:24:22.453Z",
            "valorTotal": 72862
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-29T12:08:23.264Z"
    },
    {
        "idhistorico": 595,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-11T17:42:04.743Z",
            "valorTotal": 213087
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-08T20:23:36.508Z"
    },
    {
        "idhistorico": 596,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-03T12:03:41.916Z",
            "valorTotal": 243317
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-13T22:10:52.909Z"
    },
    {
        "idhistorico": 597,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-13T19:06:05.737Z",
            "valorTotal": 129229
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-15T20:34:11.607Z"
    },
    {
        "idhistorico": 598,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-21T20:00:39.574Z",
            "valorTotal": 31291
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-29T04:31:20.803Z"
    },
    {
        "idhistorico": 599,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-30T23:15:41.123Z",
            "valorTotal": 160874
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-07T01:39:27.800Z"
    },
    {
        "idhistorico": 600,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-06T21:50:43.837Z",
            "valorTotal": 122926
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-08T22:33:39.933Z"
    },
    {
        "idhistorico": 601,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-05T01:09:16.170Z",
            "valorTotal": 187191
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-25T07:50:42.579Z"
    },
    {
        "idhistorico": 602,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-21T00:09:57.921Z",
            "valorTotal": 138166
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-20T19:46:31.441Z"
    },
    {
        "idhistorico": 603,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-26T02:35:07.907Z",
            "valorTotal": 105097
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-08T06:36:00.318Z"
    },
    {
        "idhistorico": 604,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-03-06T04:10:47.363Z",
            "valorTotal": 47449
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-17T00:50:21.678Z"
    },
    {
        "idhistorico": 605,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-30T15:05:13.930Z",
            "valorTotal": 47209
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-27T02:52:35.561Z"
    },
    {
        "idhistorico": 606,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-30T13:45:08.139Z",
            "valorTotal": 26121
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-05T17:06:12.478Z"
    },
    {
        "idhistorico": 607,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-30T03:08:30.063Z",
            "valorTotal": 227852
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-10T05:22:40.926Z"
    },
    {
        "idhistorico": 608,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-29T11:28:38.897Z",
            "valorTotal": 181955
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-24T12:52:12.656Z"
    },
    {
        "idhistorico": 609,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-07T20:38:50.743Z",
            "valorTotal": 71163
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-17T16:55:43.627Z"
    },
    {
        "idhistorico": 610,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-03T13:41:00.089Z",
            "valorTotal": 194426
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-01T22:38:08.606Z"
    },
    {
        "idhistorico": 611,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-22T08:40:03.901Z",
            "valorTotal": 148524
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-23T22:07:51.398Z"
    },
    {
        "idhistorico": 612,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-05-18T16:45:35.568Z",
            "valorTotal": 237178
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-02T20:37:45.976Z"
    },
    {
        "idhistorico": 613,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-06-27T10:56:03.512Z",
            "valorTotal": 204249
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-12T10:22:58.552Z"
    },
    {
        "idhistorico": 614,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-28T23:19:25.575Z",
            "valorTotal": 36932
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-15T10:23:24.663Z"
    },
    {
        "idhistorico": 615,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-02-28T16:33:02.707Z",
            "valorTotal": 222830
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-02T22:45:15.191Z"
    },
    {
        "idhistorico": 616,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-29T11:02:57.434Z",
            "valorTotal": 180207
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-04T09:36:42.783Z"
    },
    {
        "idhistorico": 617,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-04-14T02:43:18.372Z",
            "valorTotal": 214925
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-02T01:24:21.460Z"
    },
    {
        "idhistorico": 618,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-08-02T23:39:22.996Z",
            "valorTotal": 244138
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-11T04:55:41.030Z"
    },
    {
        "idhistorico": 619,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-27T11:12:53.609Z",
            "valorTotal": 121639
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-29T13:42:37.551Z"
    },
    {
        "idhistorico": 620,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-06T00:50:40.931Z",
            "valorTotal": 233235
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-11T22:36:23.701Z"
    },
    {
        "idhistorico": 621,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-04T07:10:52.171Z",
            "valorTotal": 156747
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-12T08:33:26.979Z"
    },
    {
        "idhistorico": 622,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-01T00:21:19.376Z",
            "valorTotal": 155108
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-20T17:15:00.291Z"
    },
    {
        "idhistorico": 623,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-03T01:40:51.499Z",
            "valorTotal": 172858
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-17T20:11:44.589Z"
    },
    {
        "idhistorico": 624,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-01-16T00:40:10.534Z",
            "valorTotal": 98915
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-14T12:30:45.847Z"
    },
    {
        "idhistorico": 625,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-09T04:16:24.594Z",
            "valorTotal": 103928
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-22T05:18:38.511Z"
    },
    {
        "idhistorico": 626,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-02T22:40:36.334Z",
            "valorTotal": 228733
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-10T03:12:16.885Z"
    },
    {
        "idhistorico": 627,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-09T03:50:16.520Z",
            "valorTotal": 83465
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-04T02:12:47.661Z"
    },
    {
        "idhistorico": 628,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-19T04:15:58.356Z",
            "valorTotal": 179486
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-31T00:05:43.113Z"
    },
    {
        "idhistorico": 629,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-22T05:16:52.101Z",
            "valorTotal": 180935
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-05T17:34:36.750Z"
    },
    {
        "idhistorico": 630,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-13T18:59:53.439Z",
            "valorTotal": 77333
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-28T22:34:44.492Z"
    },
    {
        "idhistorico": 631,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-02-09T01:54:31.270Z",
            "valorTotal": 215664
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-28T04:55:51.644Z"
    },
    {
        "idhistorico": 632,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-09T21:37:30.935Z",
            "valorTotal": 38347
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-13T13:22:37.317Z"
    },
    {
        "idhistorico": 633,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-16T13:53:19.351Z",
            "valorTotal": 82232
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-24T19:43:29.637Z"
    },
    {
        "idhistorico": 634,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-29T00:37:08.043Z",
            "valorTotal": 228481
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-13T01:30:59.063Z"
    },
    {
        "idhistorico": 635,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-04-25T04:06:08.857Z",
            "valorTotal": 141589
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-13T20:24:31.428Z"
    },
    {
        "idhistorico": 636,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-27T19:25:06.491Z",
            "valorTotal": 99220
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-30T12:12:34.332Z"
    },
    {
        "idhistorico": 637,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-22T02:13:18.032Z",
            "valorTotal": 165809
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-02T04:17:10.641Z"
    },
    {
        "idhistorico": 638,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-04T10:40:39.938Z",
            "valorTotal": 37694
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-10T02:45:11.228Z"
    },
    {
        "idhistorico": 639,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-04T01:48:27.458Z",
            "valorTotal": 135343
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-24T01:55:46.017Z"
    },
    {
        "idhistorico": 640,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-08-04T23:05:37.793Z",
            "valorTotal": 228255
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-29T18:00:16.354Z"
    },
    {
        "idhistorico": 641,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-26T20:29:53.179Z",
            "valorTotal": 132601
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-25T19:42:03.989Z"
    },
    {
        "idhistorico": 642,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-19T15:06:41.856Z",
            "valorTotal": 213754
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-04T11:42:15.736Z"
    },
    {
        "idhistorico": 643,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-16T12:59:13.654Z",
            "valorTotal": 61679
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-09T07:42:12.149Z"
    },
    {
        "idhistorico": 644,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-21T21:49:10.461Z",
            "valorTotal": 192616
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-01T19:52:22.718Z"
    },
    {
        "idhistorico": 645,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-07T06:04:34.983Z",
            "valorTotal": 187434
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-18T20:47:30.593Z"
    },
    {
        "idhistorico": 646,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-30T07:50:09.023Z",
            "valorTotal": 187648
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-15T14:11:03.101Z"
    },
    {
        "idhistorico": 647,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-01T13:23:04.482Z",
            "valorTotal": 126209
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-06T23:10:43.898Z"
    },
    {
        "idhistorico": 648,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-16T11:10:17.621Z",
            "valorTotal": 42645
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-27T06:44:31.669Z"
    },
    {
        "idhistorico": 649,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-20T06:22:58.692Z",
            "valorTotal": 80092
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-09T16:57:13.557Z"
    },
    {
        "idhistorico": 650,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-10T22:07:30.696Z",
            "valorTotal": 149280
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-28T06:44:03.400Z"
    },
    {
        "idhistorico": 651,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-04T09:34:34.622Z",
            "valorTotal": 72281
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-23T05:03:03.352Z"
    },
    {
        "idhistorico": 652,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-08-08T11:56:34.737Z",
            "valorTotal": 158414
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-02T07:48:09.312Z"
    },
    {
        "idhistorico": 653,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-10T12:24:10.474Z",
            "valorTotal": 49390
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-01T19:40:13.267Z"
    },
    {
        "idhistorico": 654,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-02-28T18:12:04.781Z",
            "valorTotal": 219549
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-11T05:17:22.404Z"
    },
    {
        "idhistorico": 655,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-05T10:27:46.012Z",
            "valorTotal": 93138
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-19T21:57:48.516Z"
    },
    {
        "idhistorico": 656,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-08-07T07:28:40.940Z",
            "valorTotal": 217166
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-20T10:52:25.575Z"
    },
    {
        "idhistorico": 657,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-14T16:28:59.354Z",
            "valorTotal": 35741
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-08T18:45:20.563Z"
    },
    {
        "idhistorico": 658,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-26T17:09:14.822Z",
            "valorTotal": 43486
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-14T14:01:40.603Z"
    },
    {
        "idhistorico": 659,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-11T06:17:28.152Z",
            "valorTotal": 21439
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-09T05:15:29.064Z"
    },
    {
        "idhistorico": 660,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-13T05:45:48.537Z",
            "valorTotal": 156332
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-28T02:18:16.957Z"
    },
    {
        "idhistorico": 661,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-12T02:05:46.697Z",
            "valorTotal": 153341
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-19T15:05:26.581Z"
    },
    {
        "idhistorico": 662,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-13T07:51:57.302Z",
            "valorTotal": 51362
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-10T17:21:38.397Z"
    },
    {
        "idhistorico": 663,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-04T19:37:48.488Z",
            "valorTotal": 153684
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-17T17:23:59.188Z"
    },
    {
        "idhistorico": 664,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-17T20:16:02.646Z",
            "valorTotal": 84158
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-31T20:59:57.765Z"
    },
    {
        "idhistorico": 665,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-02T05:45:47.320Z",
            "valorTotal": 248091
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-13T00:40:02.276Z"
    },
    {
        "idhistorico": 666,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-31T20:48:31.947Z",
            "valorTotal": 41859
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-07T03:19:52.427Z"
    },
    {
        "idhistorico": 667,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-16T21:02:05.486Z",
            "valorTotal": 201118
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-02T05:57:33.422Z"
    },
    {
        "idhistorico": 668,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-04T16:19:08.363Z",
            "valorTotal": 198943
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-02T16:36:29.587Z"
    },
    {
        "idhistorico": 669,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-24T02:29:35.071Z",
            "valorTotal": 242563
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-31T13:10:06.961Z"
    },
    {
        "idhistorico": 670,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-03T02:08:38.494Z",
            "valorTotal": 178771
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-23T15:59:28.657Z"
    },
    {
        "idhistorico": 671,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-06-21T02:03:39.808Z",
            "valorTotal": 119705
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-15T22:59:38.132Z"
    },
    {
        "idhistorico": 672,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-14T07:59:50.676Z",
            "valorTotal": 191804
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-11T19:02:13.282Z"
    },
    {
        "idhistorico": 673,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-25T05:24:51.459Z",
            "valorTotal": 158140
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-11T18:49:03.367Z"
    },
    {
        "idhistorico": 674,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-31T20:36:02.417Z",
            "valorTotal": 202013
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-06T16:55:54.336Z"
    },
    {
        "idhistorico": 675,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-16T19:42:37.415Z",
            "valorTotal": 170480
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-31T21:51:20.419Z"
    },
    {
        "idhistorico": 676,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-15T18:00:11.457Z",
            "valorTotal": 175899
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-19T09:22:03.047Z"
    },
    {
        "idhistorico": 677,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-03T04:36:32.236Z",
            "valorTotal": 95024
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-22T17:17:34.802Z"
    },
    {
        "idhistorico": 678,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-04-06T20:19:23.424Z",
            "valorTotal": 172451
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-08T06:37:58.010Z"
    },
    {
        "idhistorico": 679,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-03T04:20:22.141Z",
            "valorTotal": 48613
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-19T19:50:10.800Z"
    },
    {
        "idhistorico": 680,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-13T13:06:54.536Z",
            "valorTotal": 142560
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-13T01:14:26.360Z"
    },
    {
        "idhistorico": 681,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-28T14:50:12.869Z",
            "valorTotal": 177933
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-01T04:13:00.464Z"
    },
    {
        "idhistorico": 682,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-01-13T03:36:07.165Z",
            "valorTotal": 168456
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-23T00:23:55.393Z"
    },
    {
        "idhistorico": 683,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-26T04:30:24.095Z",
            "valorTotal": 207043
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-28T10:43:37.512Z"
    },
    {
        "idhistorico": 684,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-13T10:56:51.520Z",
            "valorTotal": 139983
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-25T08:13:49.303Z"
    },
    {
        "idhistorico": 685,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-05-14T08:21:02.572Z",
            "valorTotal": 191116
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-29T18:48:05.339Z"
    },
    {
        "idhistorico": 686,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-10T08:35:41.163Z",
            "valorTotal": 87433
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-06T21:55:56.740Z"
    },
    {
        "idhistorico": 687,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-21T17:20:23.543Z",
            "valorTotal": 232342
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-27T05:52:11.115Z"
    },
    {
        "idhistorico": 688,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-04-05T13:22:26.422Z",
            "valorTotal": 116735
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-12T06:18:10.665Z"
    },
    {
        "idhistorico": 689,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-27T13:14:30.267Z",
            "valorTotal": 71643
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-31T20:14:09.930Z"
    },
    {
        "idhistorico": 690,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-20T05:59:20.360Z",
            "valorTotal": 116969
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-19T09:27:13.024Z"
    },
    {
        "idhistorico": 691,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-29T16:03:18.322Z",
            "valorTotal": 60016
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-02T18:17:03.801Z"
    },
    {
        "idhistorico": 692,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-21T19:55:30.296Z",
            "valorTotal": 204781
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-10T01:06:23.571Z"
    },
    {
        "idhistorico": 693,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-08T12:37:05.163Z",
            "valorTotal": 220017
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-24T03:02:28.101Z"
    },
    {
        "idhistorico": 694,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-26T21:03:41.720Z",
            "valorTotal": 235793
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-04T23:42:21.615Z"
    },
    {
        "idhistorico": 695,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-13T16:19:11.065Z",
            "valorTotal": 40354
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-31T14:55:36.024Z"
    },
    {
        "idhistorico": 696,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-14T08:14:40.450Z",
            "valorTotal": 133212
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-25T16:36:36.799Z"
    },
    {
        "idhistorico": 697,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-01T18:35:02.919Z",
            "valorTotal": 80583
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-07T17:28:29.232Z"
    },
    {
        "idhistorico": 698,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-10T00:59:29.130Z",
            "valorTotal": 95195
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-20T09:16:25.201Z"
    },
    {
        "idhistorico": 699,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-13T02:05:44.223Z",
            "valorTotal": 213070
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-13T07:56:19.742Z"
    },
    {
        "idhistorico": 700,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-14T16:11:27.577Z",
            "valorTotal": 146499
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-09T20:45:35.401Z"
    },
    {
        "idhistorico": 701,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-27T03:14:43.198Z",
            "valorTotal": 236010
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-13T22:06:38.789Z"
    },
    {
        "idhistorico": 702,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-06T09:35:57.141Z",
            "valorTotal": 220265
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-28T19:44:08.318Z"
    },
    {
        "idhistorico": 703,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-04T06:34:08.739Z",
            "valorTotal": 39299
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-04T11:25:44.825Z"
    },
    {
        "idhistorico": 704,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-26T10:06:32.110Z",
            "valorTotal": 131661
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-13T00:24:58.185Z"
    },
    {
        "idhistorico": 705,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-21T05:46:33.030Z",
            "valorTotal": 246379
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-23T10:03:30.861Z"
    },
    {
        "idhistorico": 706,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-15T08:24:57.906Z",
            "valorTotal": 201247
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-10T12:20:54.043Z"
    },
    {
        "idhistorico": 707,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-25T17:47:00.123Z",
            "valorTotal": 118199
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-10T13:32:26.377Z"
    },
    {
        "idhistorico": 708,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-14T19:15:40.424Z",
            "valorTotal": 240763
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-10T22:24:17.875Z"
    },
    {
        "idhistorico": 709,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-21T14:27:21.585Z",
            "valorTotal": 160265
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-08T21:42:29.514Z"
    },
    {
        "idhistorico": 710,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-18T11:32:59.122Z",
            "valorTotal": 149102
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-23T05:22:02.668Z"
    },
    {
        "idhistorico": 711,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-17T11:18:54.950Z",
            "valorTotal": 33984
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-22T22:17:58.757Z"
    },
    {
        "idhistorico": 712,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-15T17:53:04.597Z",
            "valorTotal": 32090
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-31T13:22:26.381Z"
    },
    {
        "idhistorico": 713,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-18T08:07:52.943Z",
            "valorTotal": 221069
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-27T06:38:11.328Z"
    },
    {
        "idhistorico": 714,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-24T21:10:40.119Z",
            "valorTotal": 105267
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-07T16:21:46.968Z"
    },
    {
        "idhistorico": 715,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-03-26T08:18:04.623Z",
            "valorTotal": 163184
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-25T03:02:48.296Z"
    },
    {
        "idhistorico": 716,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-31T06:13:26.891Z",
            "valorTotal": 48704
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-01T12:23:50.982Z"
    },
    {
        "idhistorico": 717,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-02-05T13:27:52.764Z",
            "valorTotal": 106671
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-06T05:20:13.430Z"
    },
    {
        "idhistorico": 718,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-03-18T23:57:56.483Z",
            "valorTotal": 155142
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-06T06:00:10.255Z"
    },
    {
        "idhistorico": 719,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-01T20:24:35.070Z",
            "valorTotal": 98471
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-23T09:53:07.495Z"
    },
    {
        "idhistorico": 720,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-29T03:16:22.067Z",
            "valorTotal": 191226
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-01T07:19:46.089Z"
    },
    {
        "idhistorico": 721,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-13T07:19:37.841Z",
            "valorTotal": 26006
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-10T15:43:16.206Z"
    },
    {
        "idhistorico": 722,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-03T21:11:22.428Z",
            "valorTotal": 23051
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-02T16:48:11.166Z"
    },
    {
        "idhistorico": 723,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-08-03T22:58:49.449Z",
            "valorTotal": 95348
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-22T20:07:38.172Z"
    },
    {
        "idhistorico": 724,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-13T04:47:12.147Z",
            "valorTotal": 219153
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-02T10:32:02.280Z"
    },
    {
        "idhistorico": 725,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-02T14:57:51.452Z",
            "valorTotal": 25441
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-26T09:34:40.230Z"
    },
    {
        "idhistorico": 726,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-15T13:13:13.938Z",
            "valorTotal": 35179
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-10T09:00:58.647Z"
    },
    {
        "idhistorico": 727,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-22T04:09:40.930Z",
            "valorTotal": 181282
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-08T10:15:01.620Z"
    },
    {
        "idhistorico": 728,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-01T16:49:44.821Z",
            "valorTotal": 29576
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-18T18:49:16.871Z"
    },
    {
        "idhistorico": 729,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-02-06T20:19:17.895Z",
            "valorTotal": 39675
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-19T17:24:59.699Z"
    },
    {
        "idhistorico": 730,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-11T05:49:07.613Z",
            "valorTotal": 227108
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-13T17:22:52.482Z"
    },
    {
        "idhistorico": 731,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-15T18:33:53.638Z",
            "valorTotal": 236466
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-05T01:00:50.800Z"
    },
    {
        "idhistorico": 732,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-13T09:20:55.348Z",
            "valorTotal": 65023
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-27T20:21:03.048Z"
    },
    {
        "idhistorico": 733,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-17T11:57:13.586Z",
            "valorTotal": 208657
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-19T22:57:39.031Z"
    },
    {
        "idhistorico": 734,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-07T06:25:42.878Z",
            "valorTotal": 196433
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-10T11:30:04.100Z"
    },
    {
        "idhistorico": 735,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-08-03T16:56:50.162Z",
            "valorTotal": 73637
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-18T21:13:19.534Z"
    },
    {
        "idhistorico": 736,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-23T06:04:25.316Z",
            "valorTotal": 52749
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-01T09:17:24.787Z"
    },
    {
        "idhistorico": 737,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-11T14:48:38.996Z",
            "valorTotal": 53089
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-25T03:24:32.987Z"
    },
    {
        "idhistorico": 738,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-19T14:07:48.073Z",
            "valorTotal": 185908
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-29T00:37:57.289Z"
    },
    {
        "idhistorico": 739,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-08-02T21:42:20.276Z",
            "valorTotal": 111170
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-08T08:49:48.337Z"
    },
    {
        "idhistorico": 740,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-01-20T00:08:04.538Z",
            "valorTotal": 121727
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-12T08:54:58.995Z"
    },
    {
        "idhistorico": 741,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-28T12:24:38.061Z",
            "valorTotal": 50975
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-10T00:13:33.581Z"
    },
    {
        "idhistorico": 742,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-02-25T05:00:26.632Z",
            "valorTotal": 42394
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-01T19:29:00.536Z"
    },
    {
        "idhistorico": 743,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-03T02:53:07.475Z",
            "valorTotal": 114722
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-24T16:15:21.512Z"
    },
    {
        "idhistorico": 744,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-24T22:55:56.090Z",
            "valorTotal": 127222
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-31T11:45:48.373Z"
    },
    {
        "idhistorico": 745,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-04-05T06:18:22.904Z",
            "valorTotal": 132840
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-04T01:17:35.785Z"
    },
    {
        "idhistorico": 746,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-10T08:48:14.101Z",
            "valorTotal": 172509
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-14T14:00:55.524Z"
    },
    {
        "idhistorico": 747,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-04T22:20:59.098Z",
            "valorTotal": 238937
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-14T05:49:20.517Z"
    },
    {
        "idhistorico": 748,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-03T12:23:47.541Z",
            "valorTotal": 89357
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-02T12:00:43.496Z"
    },
    {
        "idhistorico": 749,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-04T16:47:37.947Z",
            "valorTotal": 230620
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-24T16:11:12.582Z"
    },
    {
        "idhistorico": 750,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-06T14:12:28.922Z",
            "valorTotal": 218122
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-22T04:03:12.471Z"
    },
    {
        "idhistorico": 751,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-09T01:51:39.304Z",
            "valorTotal": 229899
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-07T19:12:16.529Z"
    },
    {
        "idhistorico": 752,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-08-09T10:57:31.778Z",
            "valorTotal": 123729
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-19T11:11:28.780Z"
    },
    {
        "idhistorico": 753,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-28T05:27:32.582Z",
            "valorTotal": 212869
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-13T00:53:40.507Z"
    },
    {
        "idhistorico": 754,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-01T02:32:52.113Z",
            "valorTotal": 22624
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-11T11:14:24.366Z"
    },
    {
        "idhistorico": 755,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-07-28T16:11:15.449Z",
            "valorTotal": 33566
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-04T12:07:51.551Z"
    },
    {
        "idhistorico": 756,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-19T21:28:23.534Z",
            "valorTotal": 158725
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-06T19:32:18.579Z"
    },
    {
        "idhistorico": 757,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-02-08T21:45:18.731Z",
            "valorTotal": 212074
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-18T02:31:21.948Z"
    },
    {
        "idhistorico": 758,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-08-10T02:47:43.228Z",
            "valorTotal": 168445
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-18T14:42:52.086Z"
    },
    {
        "idhistorico": 759,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-02T16:40:12.968Z",
            "valorTotal": 97001
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-22T01:29:19.115Z"
    },
    {
        "idhistorico": 760,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-04T18:58:46.962Z",
            "valorTotal": 95583
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-18T17:43:24.526Z"
    },
    {
        "idhistorico": 761,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-10T02:00:22.627Z",
            "valorTotal": 201195
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-22T16:19:05.318Z"
    },
    {
        "idhistorico": 762,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-07-01T03:27:07.099Z",
            "valorTotal": 65225
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-08T17:22:55.352Z"
    },
    {
        "idhistorico": 763,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-05-15T20:47:56.190Z",
            "valorTotal": 168101
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-16T14:17:52.319Z"
    },
    {
        "idhistorico": 764,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-17T06:34:32.141Z",
            "valorTotal": 98869
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-10T15:24:25.767Z"
    },
    {
        "idhistorico": 765,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-29T12:49:08.215Z",
            "valorTotal": 158740
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-01T22:29:16.718Z"
    },
    {
        "idhistorico": 766,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-29T02:00:02.422Z",
            "valorTotal": 59526
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-09T11:16:59.419Z"
    },
    {
        "idhistorico": 767,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-17T10:24:04.540Z",
            "valorTotal": 142874
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-16T12:28:53.327Z"
    },
    {
        "idhistorico": 768,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-05T05:24:57.374Z",
            "valorTotal": 209244
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-03T13:33:15.829Z"
    },
    {
        "idhistorico": 769,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-06T09:52:39.361Z",
            "valorTotal": 233705
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-04T11:34:09.725Z"
    },
    {
        "idhistorico": 770,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-28T23:23:02.236Z",
            "valorTotal": 51418
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-06T04:27:26.989Z"
    },
    {
        "idhistorico": 771,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-25T19:41:24.739Z",
            "valorTotal": 136789
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-01-21T22:07:54.782Z"
    },
    {
        "idhistorico": 772,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-10T18:00:12.091Z",
            "valorTotal": 166294
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-14T18:15:21.906Z"
    },
    {
        "idhistorico": 773,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-12T04:02:44.931Z",
            "valorTotal": 58089
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-22T23:37:42.619Z"
    },
    {
        "idhistorico": 774,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-24T18:37:48.319Z",
            "valorTotal": 69464
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-25T16:49:40.969Z"
    },
    {
        "idhistorico": 775,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-14T06:35:18.989Z",
            "valorTotal": 51980
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-31T10:41:03.550Z"
    },
    {
        "idhistorico": 776,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-06T17:22:36.103Z",
            "valorTotal": 201335
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-26T02:23:56.064Z"
    },
    {
        "idhistorico": 777,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-15T00:38:16.352Z",
            "valorTotal": 211356
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-16T14:01:55.947Z"
    },
    {
        "idhistorico": 778,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-13T20:41:17.119Z",
            "valorTotal": 31864
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-17T09:45:48.914Z"
    },
    {
        "idhistorico": 779,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-24T19:53:14.634Z",
            "valorTotal": 137569
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-07T10:32:26.353Z"
    },
    {
        "idhistorico": 780,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-27T02:20:16.914Z",
            "valorTotal": 173104
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-21T07:23:24.055Z"
    },
    {
        "idhistorico": 781,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-07T02:21:54.233Z",
            "valorTotal": 71436
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-14T13:29:16.993Z"
    },
    {
        "idhistorico": 782,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-03-23T23:48:49.945Z",
            "valorTotal": 141958
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-16T15:23:30.023Z"
    },
    {
        "idhistorico": 783,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-07T03:26:09.063Z",
            "valorTotal": 45681
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-04T21:29:57.677Z"
    },
    {
        "idhistorico": 784,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-04-18T22:29:12.695Z",
            "valorTotal": 205059
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-16T20:08:32.000Z"
    },
    {
        "idhistorico": 785,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-11T15:24:09.665Z",
            "valorTotal": 152421
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-16T12:46:10.860Z"
    },
    {
        "idhistorico": 786,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-03-03T09:41:28.443Z",
            "valorTotal": 106293
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-30T04:16:22.996Z"
    },
    {
        "idhistorico": 787,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-21T08:24:09.096Z",
            "valorTotal": 186285
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-31T02:22:47.143Z"
    },
    {
        "idhistorico": 788,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-01-26T18:14:02.469Z",
            "valorTotal": 175376
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-29T00:50:41.641Z"
    },
    {
        "idhistorico": 789,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-18T09:11:09.585Z",
            "valorTotal": 195995
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-22T05:40:50.457Z"
    },
    {
        "idhistorico": 790,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-16T17:54:53.819Z",
            "valorTotal": 121588
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-13T08:09:30.763Z"
    },
    {
        "idhistorico": 791,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-14T06:26:28.453Z",
            "valorTotal": 248353
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-02T12:17:23.088Z"
    },
    {
        "idhistorico": 792,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-29T14:44:49.860Z",
            "valorTotal": 219691
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-04T21:06:27.135Z"
    },
    {
        "idhistorico": 793,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-05T20:26:54.536Z",
            "valorTotal": 59812
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-25T18:03:02.992Z"
    },
    {
        "idhistorico": 794,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-16T18:35:37.001Z",
            "valorTotal": 108733
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-26T23:51:32.891Z"
    },
    {
        "idhistorico": 795,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-20T02:36:40.871Z",
            "valorTotal": 34390
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-03T14:29:26.826Z"
    },
    {
        "idhistorico": 796,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-08T15:53:29.401Z",
            "valorTotal": 175147
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-24T21:55:09.141Z"
    },
    {
        "idhistorico": 797,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-02T03:15:37.767Z",
            "valorTotal": 83181
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-24T02:59:32.229Z"
    },
    {
        "idhistorico": 798,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-14T22:49:08.221Z",
            "valorTotal": 180246
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-30T19:02:44.667Z"
    },
    {
        "idhistorico": 799,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-19T12:41:32.422Z",
            "valorTotal": 134628
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-19T10:55:42.462Z"
    },
    {
        "idhistorico": 800,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-08-03T17:19:01.733Z",
            "valorTotal": 125959
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-21T10:46:53.001Z"
    },
    {
        "idhistorico": 801,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-11T22:59:18.157Z",
            "valorTotal": 107911
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-09T21:21:49.949Z"
    },
    {
        "idhistorico": 802,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-08-09T17:05:35.853Z",
            "valorTotal": 109038
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-31T12:44:45.137Z"
    },
    {
        "idhistorico": 803,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-12T23:03:47.795Z",
            "valorTotal": 104043
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-17T21:28:58.407Z"
    },
    {
        "idhistorico": 804,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-08T20:12:23.980Z",
            "valorTotal": 132058
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-11T06:31:18.165Z"
    },
    {
        "idhistorico": 805,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-06T21:53:48.630Z",
            "valorTotal": 108226
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-28T21:16:41.889Z"
    },
    {
        "idhistorico": 806,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-21T04:06:56.053Z",
            "valorTotal": 89302
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-10T22:54:18.589Z"
    },
    {
        "idhistorico": 807,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-14T11:57:35.544Z",
            "valorTotal": 227526
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-02T10:14:43.515Z"
    },
    {
        "idhistorico": 808,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-10T03:58:57.823Z",
            "valorTotal": 159574
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-24T20:25:51.937Z"
    },
    {
        "idhistorico": 809,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-02-05T01:09:33.182Z",
            "valorTotal": 175262
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-12T04:52:26.831Z"
    },
    {
        "idhistorico": 810,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-03T23:48:52.434Z",
            "valorTotal": 244896
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-09T06:28:46.797Z"
    },
    {
        "idhistorico": 811,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-07-18T09:11:27.259Z",
            "valorTotal": 86880
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-02T06:52:27.645Z"
    },
    {
        "idhistorico": 812,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-08-01T17:26:03.835Z",
            "valorTotal": 210006
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-16T05:03:11.949Z"
    },
    {
        "idhistorico": 813,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-01T08:53:25.381Z",
            "valorTotal": 236970
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-07T06:31:26.856Z"
    },
    {
        "idhistorico": 814,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-06T23:12:31.867Z",
            "valorTotal": 181531
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-26T20:24:48.872Z"
    },
    {
        "idhistorico": 815,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-20T03:01:27.852Z",
            "valorTotal": 69125
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-10T20:17:44.327Z"
    },
    {
        "idhistorico": 816,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-11T07:17:13.546Z",
            "valorTotal": 77981
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-08T12:04:01.680Z"
    },
    {
        "idhistorico": 817,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-10T14:58:10.248Z",
            "valorTotal": 164214
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-23T23:50:52.472Z"
    },
    {
        "idhistorico": 818,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-18T00:46:37.594Z",
            "valorTotal": 118692
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-19T05:42:36.222Z"
    },
    {
        "idhistorico": 819,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-14T01:05:58.337Z",
            "valorTotal": 241444
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-13T02:27:21.683Z"
    },
    {
        "idhistorico": 820,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-03-10T11:43:25.670Z",
            "valorTotal": 184025
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-05T13:55:57.254Z"
    },
    {
        "idhistorico": 821,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-05-06T10:37:27.337Z",
            "valorTotal": 22230
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-28T18:57:54.081Z"
    },
    {
        "idhistorico": 822,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-15T22:22:08.944Z",
            "valorTotal": 20179
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-21T09:43:11.450Z"
    },
    {
        "idhistorico": 823,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-01-31T22:26:47.042Z",
            "valorTotal": 143394
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-09T22:37:41.828Z"
    },
    {
        "idhistorico": 824,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-25T04:17:47.850Z",
            "valorTotal": 93543
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-20T18:11:28.241Z"
    },
    {
        "idhistorico": 825,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-08T03:21:21.702Z",
            "valorTotal": 154802
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-24T12:19:30.617Z"
    },
    {
        "idhistorico": 826,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-20T09:21:03.033Z",
            "valorTotal": 75318
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-07T19:46:24.435Z"
    },
    {
        "idhistorico": 827,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-13T23:47:20.920Z",
            "valorTotal": 181175
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-24T23:26:39.426Z"
    },
    {
        "idhistorico": 828,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-04T02:33:57.945Z",
            "valorTotal": 85010
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-04T08:45:25.008Z"
    },
    {
        "idhistorico": 829,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-18T05:48:44.523Z",
            "valorTotal": 199413
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-26T09:07:06.677Z"
    },
    {
        "idhistorico": 830,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-16T00:32:17.253Z",
            "valorTotal": 54480
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-13T05:13:05.733Z"
    },
    {
        "idhistorico": 831,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-02-17T20:38:40.506Z",
            "valorTotal": 159911
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-21T07:03:27.208Z"
    },
    {
        "idhistorico": 832,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-02-03T04:06:26.449Z",
            "valorTotal": 73380
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-01T19:44:40.423Z"
    },
    {
        "idhistorico": 833,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-01-23T12:32:00.810Z",
            "valorTotal": 155427
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-10T21:05:25.617Z"
    },
    {
        "idhistorico": 834,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-07-27T21:02:30.635Z",
            "valorTotal": 228766
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-22T01:27:10.736Z"
    },
    {
        "idhistorico": 835,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-23T05:14:34.500Z",
            "valorTotal": 116674
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-12T20:35:42.037Z"
    },
    {
        "idhistorico": 836,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-08-03T14:14:24.521Z",
            "valorTotal": 209472
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-19T23:05:14.752Z"
    },
    {
        "idhistorico": 837,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-01-25T15:21:03.746Z",
            "valorTotal": 146545
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-20T13:19:17.866Z"
    },
    {
        "idhistorico": 838,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-29T17:41:22.480Z",
            "valorTotal": 245611
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-27T02:53:42.013Z"
    },
    {
        "idhistorico": 839,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-14T08:26:19.238Z",
            "valorTotal": 211680
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-31T15:32:37.427Z"
    },
    {
        "idhistorico": 840,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-28T06:52:27.645Z",
            "valorTotal": 64830
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-21T01:35:11.572Z"
    },
    {
        "idhistorico": 841,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-16T22:15:52.168Z",
            "valorTotal": 193989
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-17T08:39:39.380Z"
    },
    {
        "idhistorico": 842,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-25T01:00:06.168Z",
            "valorTotal": 135270
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-17T17:30:53.780Z"
    },
    {
        "idhistorico": 843,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-08-04T07:09:28.358Z",
            "valorTotal": 104989
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-16T10:36:06.128Z"
    },
    {
        "idhistorico": 844,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-12T20:40:28.728Z",
            "valorTotal": 149545
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-16T12:36:48.740Z"
    },
    {
        "idhistorico": 845,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-10T02:31:45.670Z",
            "valorTotal": 170457
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-31T08:08:48.800Z"
    },
    {
        "idhistorico": 846,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-12T22:38:52.201Z",
            "valorTotal": 239003
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-04T10:06:03.191Z"
    },
    {
        "idhistorico": 847,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-22T16:01:55.164Z",
            "valorTotal": 97218
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-17T09:12:27.347Z"
    },
    {
        "idhistorico": 848,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-03T13:10:08.825Z",
            "valorTotal": 32853
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-08T22:38:16.015Z"
    },
    {
        "idhistorico": 849,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-14T12:00:35.265Z",
            "valorTotal": 127423
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-17T02:03:35.664Z"
    },
    {
        "idhistorico": 850,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-01T23:01:25.209Z",
            "valorTotal": 25796
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-20T23:10:01.960Z"
    },
    {
        "idhistorico": 851,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-04T08:40:18.883Z",
            "valorTotal": 188006
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-23T23:11:24.767Z"
    },
    {
        "idhistorico": 852,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-01-21T16:48:25.896Z",
            "valorTotal": 21981
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-25T02:31:33.750Z"
    },
    {
        "idhistorico": 853,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-02-13T10:36:35.129Z",
            "valorTotal": 72565
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-07T07:42:38.456Z"
    },
    {
        "idhistorico": 854,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-03-26T17:45:30.560Z",
            "valorTotal": 198665
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-14T06:21:10.161Z"
    },
    {
        "idhistorico": 855,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-13T07:21:37.578Z",
            "valorTotal": 142240
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-03T10:51:37.658Z"
    },
    {
        "idhistorico": 856,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-01-03T19:33:48.298Z",
            "valorTotal": 125057
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-10T18:47:27.706Z"
    },
    {
        "idhistorico": 857,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-08-02T00:23:59.889Z",
            "valorTotal": 87677
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-07T16:57:28.356Z"
    },
    {
        "idhistorico": 858,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-26T01:29:19.060Z",
            "valorTotal": 74061
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-15T23:13:53.559Z"
    },
    {
        "idhistorico": 859,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-02-15T08:08:32.883Z",
            "valorTotal": 136376
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-17T04:33:54.051Z"
    },
    {
        "idhistorico": 860,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-08-01T06:00:50.183Z",
            "valorTotal": 32865
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-22T16:24:34.086Z"
    },
    {
        "idhistorico": 861,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-06-04T09:03:38.719Z",
            "valorTotal": 234887
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-20T15:36:57.377Z"
    },
    {
        "idhistorico": 862,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-25T16:13:02.795Z",
            "valorTotal": 106996
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-21T01:20:37.880Z"
    },
    {
        "idhistorico": 863,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-05-16T11:55:48.033Z",
            "valorTotal": 72568
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-24T18:32:24.550Z"
    },
    {
        "idhistorico": 864,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-13T22:11:53.170Z",
            "valorTotal": 67592
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-23T06:07:36.714Z"
    },
    {
        "idhistorico": 865,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-05-25T21:17:14.659Z",
            "valorTotal": 211405
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-17T04:37:58.772Z"
    },
    {
        "idhistorico": 866,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-12T20:17:40.821Z",
            "valorTotal": 198828
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-09T01:00:52.174Z"
    },
    {
        "idhistorico": 867,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-06T07:26:33.424Z",
            "valorTotal": 179540
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-28T19:11:51.166Z"
    },
    {
        "idhistorico": 868,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-11T10:08:26.475Z",
            "valorTotal": 77761
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-07T11:17:48.565Z"
    },
    {
        "idhistorico": 869,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-03-11T09:38:17.520Z",
            "valorTotal": 105744
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-25T18:18:58.282Z"
    },
    {
        "idhistorico": 870,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-08T19:57:36.476Z",
            "valorTotal": 135986
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-07T04:57:29.338Z"
    },
    {
        "idhistorico": 871,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-02-02T23:53:46.273Z",
            "valorTotal": 229658
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-03T05:12:18.837Z"
    },
    {
        "idhistorico": 872,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-02T10:52:30.092Z",
            "valorTotal": 242244
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-19T20:53:50.239Z"
    },
    {
        "idhistorico": 873,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-08-08T02:26:27.015Z",
            "valorTotal": 48778
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-22T02:46:41.895Z"
    },
    {
        "idhistorico": 874,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-06T16:43:32.909Z",
            "valorTotal": 132590
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-11T01:14:49.254Z"
    },
    {
        "idhistorico": 875,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-03-10T23:45:44.697Z",
            "valorTotal": 211791
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-15T19:25:12.223Z"
    },
    {
        "idhistorico": 876,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-06T13:27:17.803Z",
            "valorTotal": 177370
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-18T23:39:46.593Z"
    },
    {
        "idhistorico": 877,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-03T17:09:48.249Z",
            "valorTotal": 44072
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-31T11:08:56.287Z"
    },
    {
        "idhistorico": 878,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-09T02:29:06.053Z",
            "valorTotal": 160839
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-20T13:13:20.042Z"
    },
    {
        "idhistorico": 879,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-15T12:07:25.457Z",
            "valorTotal": 204701
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-16T20:48:41.195Z"
    },
    {
        "idhistorico": 880,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-04T00:59:27.818Z",
            "valorTotal": 138154
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-02T16:32:47.911Z"
    },
    {
        "idhistorico": 881,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-01-26T01:54:35.318Z",
            "valorTotal": 150435
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-07T22:20:49.253Z"
    },
    {
        "idhistorico": 882,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-02-05T00:44:44.645Z",
            "valorTotal": 164261
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-24T11:06:48.782Z"
    },
    {
        "idhistorico": 883,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-05-22T09:07:50.262Z",
            "valorTotal": 160550
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-13T10:13:27.759Z"
    },
    {
        "idhistorico": 884,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-03T21:28:18.658Z",
            "valorTotal": 195635
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-24T17:56:22.017Z"
    },
    {
        "idhistorico": 885,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-07-24T20:58:44.396Z",
            "valorTotal": 153114
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-08T08:12:15.541Z"
    },
    {
        "idhistorico": 886,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-28T03:39:24.865Z",
            "valorTotal": 52838
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-07T11:31:34.636Z"
    },
    {
        "idhistorico": 887,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-13T04:15:49.782Z",
            "valorTotal": 112646
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-22T05:52:02.927Z"
    },
    {
        "idhistorico": 888,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-22T15:22:13.162Z",
            "valorTotal": 177988
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-06T11:00:57.488Z"
    },
    {
        "idhistorico": 889,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-05-30T14:04:36.443Z",
            "valorTotal": 161193
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-07T22:07:51.856Z"
    },
    {
        "idhistorico": 890,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-01T15:30:25.097Z",
            "valorTotal": 153678
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-12T20:07:05.168Z"
    },
    {
        "idhistorico": 891,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-01-24T08:35:56.949Z",
            "valorTotal": 244097
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-05T23:12:57.780Z"
    },
    {
        "idhistorico": 892,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-01-23T09:36:25.430Z",
            "valorTotal": 87123
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-05T09:54:27.771Z"
    },
    {
        "idhistorico": 893,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-17T21:13:52.127Z",
            "valorTotal": 86705
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-10T22:19:08.418Z"
    },
    {
        "idhistorico": 894,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-20T12:10:28.109Z",
            "valorTotal": 234188
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-14T05:47:23.087Z"
    },
    {
        "idhistorico": 895,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-19T15:57:05.054Z",
            "valorTotal": 135435
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-24T04:56:57.508Z"
    },
    {
        "idhistorico": 896,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-03-10T15:03:53.500Z",
            "valorTotal": 163626
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-15T10:42:04.864Z"
    },
    {
        "idhistorico": 897,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-23T19:01:01.044Z",
            "valorTotal": 197473
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-13T02:52:21.217Z"
    },
    {
        "idhistorico": 898,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-07-03T10:54:14.807Z",
            "valorTotal": 35833
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-04T09:19:28.301Z"
    },
    {
        "idhistorico": 899,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-08-08T06:49:00.837Z",
            "valorTotal": 25737
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-23T01:38:51.556Z"
    },
    {
        "idhistorico": 900,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-07T03:32:23.363Z",
            "valorTotal": 166114
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-28T13:27:09.132Z"
    },
    {
        "idhistorico": 901,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-04T18:18:31.977Z",
            "valorTotal": 146157
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-10T13:55:46.431Z"
    },
    {
        "idhistorico": 902,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-08-05T11:59:51.778Z",
            "valorTotal": 47876
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-24T01:41:37.270Z"
    },
    {
        "idhistorico": 903,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-06T19:52:05.734Z",
            "valorTotal": 59142
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-22T18:06:21.719Z"
    },
    {
        "idhistorico": 904,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-06-05T02:31:44.691Z",
            "valorTotal": 153909
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-17T11:33:39.854Z"
    },
    {
        "idhistorico": 905,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-03-05T06:55:58.899Z",
            "valorTotal": 123101
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-08T21:55:54.055Z"
    },
    {
        "idhistorico": 906,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-09T19:31:53.374Z",
            "valorTotal": 37269
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-09T04:59:21.044Z"
    },
    {
        "idhistorico": 907,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-04-17T10:49:42.741Z",
            "valorTotal": 130346
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-22T20:34:46.537Z"
    },
    {
        "idhistorico": 908,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-05-25T12:53:17.959Z",
            "valorTotal": 129530
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-26T13:27:27.570Z"
    },
    {
        "idhistorico": 909,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-06-20T09:53:19.870Z",
            "valorTotal": 109715
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-28T07:52:31.594Z"
    },
    {
        "idhistorico": 910,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-01-20T12:39:54.211Z",
            "valorTotal": 22279
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-17T22:52:06.156Z"
    },
    {
        "idhistorico": 911,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-01-25T22:11:38.300Z",
            "valorTotal": 61695
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-26T04:14:45.992Z"
    },
    {
        "idhistorico": 912,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-11T16:51:26.384Z",
            "valorTotal": 62173
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-09T13:29:41.628Z"
    },
    {
        "idhistorico": 913,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-03-09T09:29:12.022Z",
            "valorTotal": 155194
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-31T08:10:07.679Z"
    },
    {
        "idhistorico": 914,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-08-03T04:39:31.288Z",
            "valorTotal": 91382
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-23T03:18:30.693Z"
    },
    {
        "idhistorico": 915,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-13T21:39:57.074Z",
            "valorTotal": 51463
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-13T03:44:32.022Z"
    },
    {
        "idhistorico": 916,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-06-24T10:33:11.696Z",
            "valorTotal": 198393
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-17T08:09:05.203Z"
    },
    {
        "idhistorico": 917,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-03-23T13:26:15.184Z",
            "valorTotal": 110890
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-24T11:56:26.650Z"
    },
    {
        "idhistorico": 918,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-07-23T23:32:04.357Z",
            "valorTotal": 106457
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-27T22:41:17.243Z"
    },
    {
        "idhistorico": 919,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-08-11T05:55:44.854Z",
            "valorTotal": 148985
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-16T22:19:04.858Z"
    },
    {
        "idhistorico": 920,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-04-19T22:07:46.210Z",
            "valorTotal": 173762
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-28T12:10:22.957Z"
    },
    {
        "idhistorico": 921,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-05-17T14:53:58.374Z",
            "valorTotal": 178072
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-28T11:47:46.309Z"
    },
    {
        "idhistorico": 922,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-18T01:56:32.410Z",
            "valorTotal": 101477
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-20T13:16:11.402Z"
    },
    {
        "idhistorico": 923,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-18T23:56:23.321Z",
            "valorTotal": 152108
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-02-09T05:33:53.883Z"
    },
    {
        "idhistorico": 924,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-26T03:45:55.972Z",
            "valorTotal": 184187
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-08T11:22:21.286Z"
    },
    {
        "idhistorico": 925,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-06-23T21:45:36.480Z",
            "valorTotal": 194537
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-08-04T23:50:06.716Z"
    },
    {
        "idhistorico": 926,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-01T10:47:33.450Z",
            "valorTotal": 93277
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-02T12:23:34.407Z"
    },
    {
        "idhistorico": 927,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-01-02T19:30:56.404Z",
            "valorTotal": 63319
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-08T10:36:25.629Z"
    },
    {
        "idhistorico": 928,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-30T21:20:18.708Z",
            "valorTotal": 60175
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-03T23:47:35.750Z"
    },
    {
        "idhistorico": 929,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-07T07:31:13.916Z",
            "valorTotal": 214592
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-30T01:12:45.034Z"
    },
    {
        "idhistorico": 930,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-11T21:14:19.139Z",
            "valorTotal": 201484
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-17T23:22:34.111Z"
    },
    {
        "idhistorico": 931,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-02-10T23:53:45.341Z",
            "valorTotal": 147174
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-15T15:04:58.641Z"
    },
    {
        "idhistorico": 932,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-03-01T22:35:40.827Z",
            "valorTotal": 99107
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-01T20:56:33.090Z"
    },
    {
        "idhistorico": 933,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-04-12T11:35:21.922Z",
            "valorTotal": 71257
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-03-21T10:40:03.905Z"
    },
    {
        "idhistorico": 934,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-11T15:43:12.515Z",
            "valorTotal": 79227
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-14T15:06:55.707Z"
    },
    {
        "idhistorico": 935,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-15T01:05:39.772Z",
            "valorTotal": 145615
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-16T09:22:23.621Z"
    },
    {
        "idhistorico": 936,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-16T21:50:36.316Z",
            "valorTotal": 27207
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-04T12:56:40.769Z"
    },
    {
        "idhistorico": 937,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-05-10T18:13:51.188Z",
            "valorTotal": 92772
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-14T16:14:57.548Z"
    },
    {
        "idhistorico": 938,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 3,
            "fechacreado": "2021-07-31T04:11:27.334Z",
            "valorTotal": 102192
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-05T03:48:37.629Z"
    },
    {
        "idhistorico": 939,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-26T19:00:52.719Z",
            "valorTotal": 243202
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-11T21:39:19.050Z"
    },
    {
        "idhistorico": 940,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-06-15T23:08:52.749Z",
            "valorTotal": 186159
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-29T13:46:32.533Z"
    },
    {
        "idhistorico": 941,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-24T05:32:21.300Z",
            "valorTotal": 185007
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-02-25T19:00:12.694Z"
    },
    {
        "idhistorico": 942,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-04-07T07:02:37.857Z",
            "valorTotal": 199152
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-22T19:49:53.105Z"
    },
    {
        "idhistorico": 943,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-02-09T21:07:24.389Z",
            "valorTotal": 111436
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-21T22:09:56.561Z"
    },
    {
        "idhistorico": 944,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-08-01T18:19:58.269Z",
            "valorTotal": 248364
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-26T21:08:26.979Z"
    },
    {
        "idhistorico": 945,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-24T08:07:28.307Z",
            "valorTotal": 54286
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-25T04:44:09.349Z"
    },
    {
        "idhistorico": 946,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-28T17:03:35.331Z",
            "valorTotal": 167799
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-30T09:40:59.871Z"
    },
    {
        "idhistorico": 947,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-04-28T11:07:13.851Z",
            "valorTotal": 198467
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-05-01T01:10:16.928Z"
    },
    {
        "idhistorico": 948,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-03-19T22:43:15.215Z",
            "valorTotal": 228777
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-22T08:10:45.257Z"
    },
    {
        "idhistorico": 949,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-07-30T13:06:16.205Z",
            "valorTotal": 194066
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-09T21:40:43.407Z"
    },
    {
        "idhistorico": 950,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-22T13:52:44.348Z",
            "valorTotal": 190862
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-06-04T20:35:26.843Z"
    },
    {
        "idhistorico": 951,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-15T00:54:15.107Z",
            "valorTotal": 227355
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-01-24T17:22:22.354Z"
    },
    {
        "idhistorico": 952,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-02-27T19:03:29.458Z",
            "valorTotal": 21714
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-01-30T15:28:07.713Z"
    },
    {
        "idhistorico": 953,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-06-23T11:58:39.499Z",
            "valorTotal": 134505
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-03T23:38:54.492Z"
    },
    {
        "idhistorico": 954,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 1,
            "fechacreado": "2021-04-30T03:34:52.029Z",
            "valorTotal": 237243
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-02-03T05:17:49.280Z"
    },
    {
        "idhistorico": 955,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-05-03T09:43:57.869Z",
            "valorTotal": 156966
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-02T19:25:15.430Z"
    },
    {
        "idhistorico": 956,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-06-01T07:38:05.560Z",
            "valorTotal": 75422
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-06T04:29:04.195Z"
    },
    {
        "idhistorico": 957,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-03-26T23:02:52.225Z",
            "valorTotal": 207382
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-04-08T07:38:52.672Z"
    },
    {
        "idhistorico": 958,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-02-19T08:33:44.185Z",
            "valorTotal": 75839
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-05-05T17:18:11.342Z"
    },
    {
        "idhistorico": 959,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-06-21T00:23:22.398Z",
            "valorTotal": 65780
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-08-04T23:33:04.559Z"
    },
    {
        "idhistorico": 960,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-07-17T16:38:33.486Z",
            "valorTotal": 158792
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-24T17:13:33.691Z"
    },
    {
        "idhistorico": 961,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 5,
            "fechacreado": "2021-07-11T16:19:28.829Z",
            "valorTotal": 176628
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-16T11:08:22.604Z"
    },
    {
        "idhistorico": 962,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-04T10:37:49.972Z",
            "valorTotal": 147146
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-04T04:41:01.179Z"
    },
    {
        "idhistorico": 963,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-08-06T02:52:20.763Z",
            "valorTotal": 57838
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-20T12:41:45.054Z"
    },
    {
        "idhistorico": 964,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-02-04T16:48:37.572Z",
            "valorTotal": 246253
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-16T05:00:40.060Z"
    },
    {
        "idhistorico": 965,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-05-04T10:24:33.850Z",
            "valorTotal": 240004
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-11T13:11:31.303Z"
    },
    {
        "idhistorico": 966,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-08T06:07:36.363Z",
            "valorTotal": 63699
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-16T11:24:11.722Z"
    },
    {
        "idhistorico": 967,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-11T03:29:51.747Z",
            "valorTotal": 135149
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-31T20:39:12.955Z"
    },
    {
        "idhistorico": 968,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-30T12:19:00.621Z",
            "valorTotal": 84599
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-01-28T04:27:34.350Z"
    },
    {
        "idhistorico": 969,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-04-11T20:53:15.903Z",
            "valorTotal": 185846
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-08T14:57:12.753Z"
    },
    {
        "idhistorico": 970,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-19T19:06:51.705Z",
            "valorTotal": 163914
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-06T01:15:00.805Z"
    },
    {
        "idhistorico": 971,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-06-12T07:04:33.392Z",
            "valorTotal": 209036
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-03T21:41:50.827Z"
    },
    {
        "idhistorico": 972,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-27T12:29:54.372Z",
            "valorTotal": 244730
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-24T04:48:59.265Z"
    },
    {
        "idhistorico": 973,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-05-03T13:47:08.343Z",
            "valorTotal": 22995
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-03-31T21:49:56.904Z"
    },
    {
        "idhistorico": 974,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-25T08:54:04.180Z",
            "valorTotal": 87923
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-27T19:49:04.744Z"
    },
    {
        "idhistorico": 975,
        "devolucion": {
            "iddevolucion": 10,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-19T23:09:57.952Z",
            "valorTotal": 214034
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-27T15:23:42.720Z"
    },
    {
        "idhistorico": 976,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-01-13T06:16:12.090Z",
            "valorTotal": 137318
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-06-09T17:12:40.337Z"
    },
    {
        "idhistorico": 977,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-07-16T03:40:50.263Z",
            "valorTotal": 36227
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-04-25T23:34:48.892Z"
    },
    {
        "idhistorico": 978,
        "devolucion": {
            "iddevolucion": 6,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 3,
            "fechacreado": "2021-04-01T22:12:23.012Z",
            "valorTotal": 205880
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-28T17:05:02.278Z"
    },
    {
        "idhistorico": 979,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-07-22T17:52:35.647Z",
            "valorTotal": 164058
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-01T02:15:48.807Z"
    },
    {
        "idhistorico": 980,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-29T07:35:44.306Z",
            "valorTotal": 210688
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-06T11:33:55.395Z"
    },
    {
        "idhistorico": 981,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-01-28T12:44:28.376Z",
            "valorTotal": 33974
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-08-07T18:25:44.550Z"
    },
    {
        "idhistorico": 982,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-02-21T05:57:12.114Z",
            "valorTotal": 32793
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-15T04:49:28.095Z"
    },
    {
        "idhistorico": 983,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "Calularon mal",
            "totalProductos": 1,
            "fechacreado": "2021-04-13T01:35:14.959Z",
            "valorTotal": 196681
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-05-27T00:44:26.387Z"
    },
    {
        "idhistorico": 984,
        "devolucion": {
            "iddevolucion": 5,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 3,
            "fechacreado": "2021-05-14T07:49:35.873Z",
            "valorTotal": 58936
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-06-26T14:47:21.485Z"
    },
    {
        "idhistorico": 985,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-03-27T20:49:27.882Z",
            "valorTotal": 105790
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-07-22T00:54:17.516Z"
    },
    {
        "idhistorico": 986,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-06-08T12:55:32.920Z",
            "valorTotal": 245381
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-08-07T01:17:41.771Z"
    },
    {
        "idhistorico": 987,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073726",
                "name": "PISPIRETA"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-07-08T09:49:05.386Z",
            "valorTotal": 164332
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-21T05:44:55.689Z"
    },
    {
        "idhistorico": 988,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 5,
            "fechacreado": "2021-04-16T23:29:27.699Z",
            "valorTotal": 201106
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-06-07T11:19:37.911Z"
    },
    {
        "idhistorico": 989,
        "devolucion": {
            "iddevolucion": 2,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Calularon mal",
            "totalProductos": 5,
            "fechacreado": "2021-06-12T12:30:33.201Z",
            "valorTotal": 87780
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-27T18:39:18.228Z"
    },
    {
        "idhistorico": 990,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "83",
                "name": "Colsubdidio"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-30T22:43:11.692Z",
            "valorTotal": 247910
        },
        "estado": "Rechazado",
        "fechaEstado": "2021-07-04T13:12:03.437Z"
    },
    {
        "idhistorico": 991,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073723",
                "name": "LUIS"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-07-18T14:48:38.172Z",
            "valorTotal": 116410
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-02-16T01:33:23.375Z"
    },
    {
        "idhistorico": 992,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 2,
            "fechacreado": "2021-03-02T19:46:35.631Z",
            "valorTotal": 234143
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-04-12T05:50:51.955Z"
    },
    {
        "idhistorico": 993,
        "devolucion": {
            "iddevolucion": 9,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073725",
                "name": "ROSA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-03-20T00:14:32.554Z",
            "valorTotal": 245892
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-03-12T04:02:15.156Z"
    },
    {
        "idhistorico": 994,
        "devolucion": {
            "iddevolucion": 4,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Calularon mal",
            "totalProductos": 4,
            "fechacreado": "2021-07-04T16:27:20.472Z",
            "valorTotal": 58389
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-25T17:31:48.511Z"
    },
    {
        "idhistorico": 995,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "82",
                "name": "Olímpica"
            },
            "motivo": "Equivocado",
            "totalProductos": 4,
            "fechacreado": "2021-05-02T00:30:19.937Z",
            "valorTotal": 84576
        },
        "estado": "Confirmado",
        "fechaEstado": "2021-07-22T16:29:44.133Z"
    },
    {
        "idhistorico": 996,
        "devolucion": {
            "iddevolucion": 8,
            "orderformid": "8090-101",
            "cliente": {
                "cedula": "80073721",
                "name": "PEDRO"
            },
            "seller": {
                "id": "84",
                "name": "Drogas para ti"
            },
            "motivo": "No lo quiero",
            "totalProductos": 4,
            "fechacreado": "2021-01-25T18:50:39.645Z",
            "valorTotal": 113307
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-04-14T13:29:31.785Z"
    },
    {
        "idhistorico": 997,
        "devolucion": {
            "iddevolucion": 3,
            "orderformid": "8090-100",
            "cliente": {
                "cedula": "80073720",
                "name": "SANTIAGO"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "No lo quiero",
            "totalProductos": 2,
            "fechacreado": "2021-01-14T11:31:01.214Z",
            "valorTotal": 162117
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-03-14T00:45:18.633Z"
    },
    {
        "idhistorico": 998,
        "devolucion": {
            "iddevolucion": 7,
            "orderformid": "8090-102",
            "cliente": {
                "cedula": "80073722",
                "name": "JUAN"
            },
            "seller": {
                "id": "80",
                "name": "Copidrogas"
            },
            "motivo": "Equivocado",
            "totalProductos": 1,
            "fechacreado": "2021-07-09T22:13:19.275Z",
            "valorTotal": 155873
        },
        "estado": "Finalizado",
        "fechaEstado": "2021-05-12T00:06:24.321Z"
    },
    {
        "idhistorico": 999,
        "devolucion": {
            "iddevolucion": 1,
            "orderformid": "8090-99",
            "cliente": {
                "cedula": "80073724",
                "name": "ANA"
            },
            "seller": {
                "id": "81",
                "name": "Drogas la Rebaja"
            },
            "motivo": "Calularon mal",
            "totalProductos": 2,
            "fechacreado": "2021-04-01T23:12:55.104Z",
            "valorTotal": 39079
        },
        "estado": "En Proceso",
        "fechaEstado": "2021-07-10T22:35:06.225Z"
    }
]


const Results = (props:any) => {

   
    const {reportFilter} = props

    const {initialDate, finalDate, cc, status,orderformid} = reportFilter
    
  
    

    let toRender = data.filter((element:any)=>
    {
        let initialDateFormated = new Date(initialDate.getFullYear(), initialDate.getMonth(),  initialDate.getDate()).getTime()
        let finalDateFormated = new Date(finalDate.getFullYear(), finalDate.getMonth(),  finalDate.getDate()).getTime()
        let elementDateFormated = element.devolucion.fechacreado.substring(0,10)
        elementDateFormated = elementDateFormated.split("-")
        /*getDate -> Month is 0 indexed*/ 
        elementDateFormated = new Date(elementDateFormated[0], elementDateFormated[1]-1,  elementDateFormated[2]).getTime()
        if(status!=='Todos')
            return elementDateFormated <= finalDateFormated && elementDateFormated >= initialDateFormated && element.estado == status
        else
            return elementDateFormated <= finalDateFormated && elementDateFormated >= initialDateFormated 
      
    })
    if(cc!=='')
    {
       
        
        toRender = toRender.filter((element:any)=>{
            
            return element.devolucion.cliente.cedula.toString()===cc.toString()})

    }
    if(orderformid!=='')
    {
        toRender = toRender.filter((element:any)=>{
            
            return element.devolucion.orderformid.toString()==orderformid.toString()}
        )

    }
    
   
    return (
       <div className="w-100 pt5"> 
       <div className="w-100"> 
         <h2 className="mt0 mb6">Resultados para la búsqueda Realizada:</h2>
        </div>
         <div className="w-100 bb b--gray flex pb5"> 
         <div className="w-50 flex">
             <div>
            <b>Rango de Fechas:&nbsp;</b> {' '}
        </div>
        <div >
             {` ${initialDate.getDate()}/${initialDate.getMonth()+1}/${initialDate.getFullYear()}`} -
            {` ${finalDate.getDate()}/${finalDate.getMonth()+1}/${finalDate.getFullYear()}`}
        </div>
        </div>
        
        <div className="w-30 flex">
         <div>
            <b>Total Registros:&nbsp;</b> {' '}
        </div>
        <div >
                {` ${toRender.length}`}
        </div>
        </div>
        <div className="w-10">
         <div>
            <img src={csvIcon}></img>
        </div>
      
        </div>
        </div>
        <div className="w-100 bb b--gray flex pb5 pt5"> 

            <DisplayData data={toRender}></DisplayData>

        
         </div>
         </div>
    )
}

const mapStateToProps = (state:any) =>{
  
    return {
      reportFilter: state.reportFilter
    }
}

export default  connect(mapStateToProps)(Results)

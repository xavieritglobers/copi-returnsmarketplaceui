import React from 'react'
import { connect } from 'react-redux'
const data = [
  {
      "idhistorico": 1,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-15T18:56:15.267Z",
          "valorTotal": 150360
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-05T10:49:06.714Z"
  },
  {
      "idhistorico": 2,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-28T04:21:05.103Z",
          "valorTotal": 188564
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-24T18:24:24.120Z"
  },
  {
      "idhistorico": 3,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-20T22:20:01.069Z",
          "valorTotal": 110352
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-05T12:52:30.912Z"
  },
  {
      "idhistorico": 4,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-13T09:38:05.048Z",
          "valorTotal": 34726
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-19T20:49:21.273Z"
  },
  {
      "idhistorico": 5,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-02-20T01:23:16.430Z",
          "valorTotal": 90676
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-23T18:31:04.129Z"
  },
  {
      "idhistorico": 6,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-07-04T18:30:09.892Z",
          "valorTotal": 136973
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-05T01:18:51.029Z"
  },
  {
      "idhistorico": 7,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-02-20T02:34:28.526Z",
          "valorTotal": 198921
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T08:30:39.615Z"
  },
  {
      "idhistorico": 8,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-15T15:30:57.365Z",
          "valorTotal": 179336
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-02T20:06:17.432Z"
  },
  {
      "idhistorico": 9,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-17T22:24:04.688Z",
          "valorTotal": 95707
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-17T13:56:26.262Z"
  },
  {
      "idhistorico": 10,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-01-26T21:34:05.253Z",
          "valorTotal": 178652
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-25T03:05:29.148Z"
  },
  {
      "idhistorico": 11,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-04-15T04:15:51.892Z",
          "valorTotal": 136782
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-04T03:46:16.127Z"
  },
  {
      "idhistorico": 12,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-18T14:20:03.770Z",
          "valorTotal": 68566
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-11T12:48:30.108Z"
  },
  {
      "idhistorico": 13,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-05-31T11:59:37.738Z",
          "valorTotal": 78967
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-26T06:19:52.248Z"
  },
  {
      "idhistorico": 14,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-01-26T08:10:15.614Z",
          "valorTotal": 148219
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-07T23:22:00.017Z"
  },
  {
      "idhistorico": 15,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-03T11:05:54.122Z",
          "valorTotal": 25268
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-25T12:20:34.015Z"
  },
  {
      "idhistorico": 16,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-02T21:55:01.319Z",
          "valorTotal": 102082
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-08T11:32:50.034Z"
  },
  {
      "idhistorico": 17,
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
          "fechacreado": "2021-07-06T01:58:42.286Z",
          "valorTotal": 124554
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-29T15:26:51.631Z"
  },
  {
      "idhistorico": 18,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-03T20:59:52.999Z",
          "valorTotal": 184860
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-09T20:19:30.470Z"
  },
  {
      "idhistorico": 19,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-14T02:41:25.595Z",
          "valorTotal": 57572
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-24T04:29:36.303Z"
  },
  {
      "idhistorico": 20,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-16T10:56:36.383Z",
          "valorTotal": 156872
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-28T01:36:06.459Z"
  },
  {
      "idhistorico": 21,
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
          "fechacreado": "2021-03-27T00:38:00.971Z",
          "valorTotal": 25873
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T01:10:56.243Z"
  },
  {
      "idhistorico": 22,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-23T21:51:25.871Z",
          "valorTotal": 44782
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-11T13:15:15.627Z"
  },
  {
      "idhistorico": 23,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-17T18:16:42.139Z",
          "valorTotal": 83524
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-13T19:07:10.956Z"
  },
  {
      "idhistorico": 24,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-15T18:33:49.862Z",
          "valorTotal": 183213
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-15T06:26:32.777Z"
  },
  {
      "idhistorico": 25,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-25T17:01:49.446Z",
          "valorTotal": 195511
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-25T09:37:54.962Z"
  },
  {
      "idhistorico": 26,
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
          "fechacreado": "2021-01-31T10:44:37.388Z",
          "valorTotal": 64116
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-23T21:49:06.665Z"
  },
  {
      "idhistorico": 27,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-01-24T16:35:36.728Z",
          "valorTotal": 207836
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-07T05:17:13.881Z"
  },
  {
      "idhistorico": 28,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-03-14T22:41:11.645Z",
          "valorTotal": 126804
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-18T14:46:23.991Z"
  },
  {
      "idhistorico": 29,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-07-30T07:25:23.751Z",
          "valorTotal": 147250
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-30T13:05:21.912Z"
  },
  {
      "idhistorico": 30,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-06T12:33:50.733Z",
          "valorTotal": 133237
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-30T11:23:36.050Z"
  },
  {
      "idhistorico": 31,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-07T22:32:15.302Z",
          "valorTotal": 161405
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-24T19:02:52.298Z"
  },
  {
      "idhistorico": 32,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-21T22:17:07.482Z",
          "valorTotal": 104896
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-30T03:22:48.544Z"
  },
  {
      "idhistorico": 33,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-09T07:25:53.193Z",
          "valorTotal": 75815
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-14T20:36:46.423Z"
  },
  {
      "idhistorico": 34,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-07-28T04:34:22.879Z",
          "valorTotal": 234938
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-12T15:45:35.033Z"
  },
  {
      "idhistorico": 35,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-30T00:41:25.659Z",
          "valorTotal": 43666
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T16:19:59.165Z"
  },
  {
      "idhistorico": 36,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-30T19:08:59.813Z",
          "valorTotal": 33889
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-20T11:58:18.448Z"
  },
  {
      "idhistorico": 37,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-10T14:45:15.946Z",
          "valorTotal": 197244
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-01T14:56:56.327Z"
  },
  {
      "idhistorico": 38,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-04-20T01:53:21.416Z",
          "valorTotal": 232379
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-15T21:46:04.088Z"
  },
  {
      "idhistorico": 39,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-09T09:37:56.281Z",
          "valorTotal": 198078
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-20T16:39:37.675Z"
  },
  {
      "idhistorico": 40,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-21T22:00:15.745Z",
          "valorTotal": 113923
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-26T10:26:50.061Z"
  },
  {
      "idhistorico": 41,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-02-20T20:07:31.369Z",
          "valorTotal": 227253
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-03T22:53:43.344Z"
  },
  {
      "idhistorico": 42,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-04-05T22:05:57.114Z",
          "valorTotal": 139074
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-25T15:13:25.250Z"
  },
  {
      "idhistorico": 43,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-03T23:28:28.417Z",
          "valorTotal": 90889
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-28T19:54:09.347Z"
  },
  {
      "idhistorico": 44,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-17T09:59:01.797Z",
          "valorTotal": 134332
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-30T13:03:06.795Z"
  },
  {
      "idhistorico": 45,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-14T16:32:26.375Z",
          "valorTotal": 156214
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T11:23:15.002Z"
  },
  {
      "idhistorico": 46,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-12T03:26:07.131Z",
          "valorTotal": 111615
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-25T11:48:10.483Z"
  },
  {
      "idhistorico": 47,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-30T16:40:41.422Z",
          "valorTotal": 86016
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-31T15:20:08.739Z"
  },
  {
      "idhistorico": 48,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-26T04:43:26.042Z",
          "valorTotal": 40159
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T11:57:19.149Z"
  },
  {
      "idhistorico": 49,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-15T13:15:13.547Z",
          "valorTotal": 106682
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-06T00:32:32.091Z"
  },
  {
      "idhistorico": 50,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-04T04:12:17.073Z",
          "valorTotal": 151841
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-12T19:05:48.933Z"
  },
  {
      "idhistorico": 51,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-30T17:49:55.876Z",
          "valorTotal": 37030
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T19:43:16.142Z"
  },
  {
      "idhistorico": 52,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-30T02:42:54.633Z",
          "valorTotal": 248978
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-26T00:32:48.049Z"
  },
  {
      "idhistorico": 53,
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
          "fechacreado": "2021-04-09T11:35:45.525Z",
          "valorTotal": 216721
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-03T23:26:41.571Z"
  },
  {
      "idhistorico": 54,
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
          "fechacreado": "2021-02-10T18:13:22.458Z",
          "valorTotal": 205313
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T23:16:03.343Z"
  },
  {
      "idhistorico": 55,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-04T18:50:41.784Z",
          "valorTotal": 194078
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-24T13:02:16.616Z"
  },
  {
      "idhistorico": 56,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-18T13:36:22.227Z",
          "valorTotal": 69119
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-23T10:57:30.243Z"
  },
  {
      "idhistorico": 57,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-01-21T06:08:25.965Z",
          "valorTotal": 29884
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-06T20:33:22.554Z"
  },
  {
      "idhistorico": 58,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-18T20:31:20.936Z",
          "valorTotal": 239967
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-23T05:17:05.665Z"
  },
  {
      "idhistorico": 59,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-15T13:08:12.652Z",
          "valorTotal": 135402
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-30T05:33:44.772Z"
  },
  {
      "idhistorico": 60,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-07-01T11:45:11.141Z",
          "valorTotal": 93812
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-29T02:09:17.717Z"
  },
  {
      "idhistorico": 61,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-01T14:20:54.736Z",
          "valorTotal": 106366
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-05T03:49:14.382Z"
  },
  {
      "idhistorico": 62,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-08T19:07:22.613Z",
          "valorTotal": 231500
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-10T12:11:05.239Z"
  },
  {
      "idhistorico": 63,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-19T23:12:51.340Z",
          "valorTotal": 92682
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-17T05:37:29.372Z"
  },
  {
      "idhistorico": 64,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-29T09:42:41.306Z",
          "valorTotal": 20509
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-03T19:13:48.733Z"
  },
  {
      "idhistorico": 65,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-16T07:39:52.394Z",
          "valorTotal": 136283
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-13T14:26:06.139Z"
  },
  {
      "idhistorico": 66,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-08-04T08:04:03.083Z",
          "valorTotal": 52374
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-16T14:56:08.695Z"
  },
  {
      "idhistorico": 67,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-08-05T12:19:14.248Z",
          "valorTotal": 52888
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-02T02:26:40.480Z"
  },
  {
      "idhistorico": 68,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-21T12:58:11.358Z",
          "valorTotal": 225844
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-22T15:43:21.259Z"
  },
  {
      "idhistorico": 69,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-18T19:01:28.361Z",
          "valorTotal": 135195
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-23T21:07:19.924Z"
  },
  {
      "idhistorico": 70,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-02T01:45:03.631Z",
          "valorTotal": 121985
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-25T03:20:12.844Z"
  },
  {
      "idhistorico": 71,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-12T16:02:57.988Z",
          "valorTotal": 139591
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T09:47:19.709Z"
  },
  {
      "idhistorico": 72,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-01-25T02:14:02.691Z",
          "valorTotal": 169402
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-25T10:01:23.024Z"
  },
  {
      "idhistorico": 73,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-23T05:21:20.922Z",
          "valorTotal": 177998
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-11T08:44:29.091Z"
  },
  {
      "idhistorico": 74,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-01T08:55:49.574Z",
          "valorTotal": 82956
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-09T12:24:55.137Z"
  },
  {
      "idhistorico": 75,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-19T23:22:19.389Z",
          "valorTotal": 93235
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-07T07:34:17.864Z"
  },
  {
      "idhistorico": 76,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-13T07:30:23.472Z",
          "valorTotal": 214300
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-11T04:44:26.415Z"
  },
  {
      "idhistorico": 77,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-01-26T20:12:31.384Z",
          "valorTotal": 142988
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-16T14:16:36.532Z"
  },
  {
      "idhistorico": 78,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-29T05:58:20.839Z",
          "valorTotal": 59678
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-13T04:31:21.340Z"
  },
  {
      "idhistorico": 79,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-02-22T14:11:17.168Z",
          "valorTotal": 31603
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-14T02:11:30.388Z"
  },
  {
      "idhistorico": 80,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-23T19:12:45.614Z",
          "valorTotal": 24739
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-12T23:26:13.648Z"
  },
  {
      "idhistorico": 81,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-13T15:45:48.378Z",
          "valorTotal": 186587
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-01T06:05:47.621Z"
  },
  {
      "idhistorico": 82,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-24T21:31:50.637Z",
          "valorTotal": 82763
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-08T08:25:37.939Z"
  },
  {
      "idhistorico": 83,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-03T07:40:49.592Z",
          "valorTotal": 75968
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-13T22:16:46.735Z"
  },
  {
      "idhistorico": 84,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-20T13:51:26.811Z",
          "valorTotal": 20084
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-10T03:51:40.687Z"
  },
  {
      "idhistorico": 85,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-06-12T21:40:10.146Z",
          "valorTotal": 144281
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-04T18:55:30.128Z"
  },
  {
      "idhistorico": 86,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-10T16:42:07.520Z",
          "valorTotal": 246818
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-28T08:07:45.942Z"
  },
  {
      "idhistorico": 87,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-15T17:01:12.172Z",
          "valorTotal": 89557
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-13T07:58:07.980Z"
  },
  {
      "idhistorico": 88,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-20T17:07:29.552Z",
          "valorTotal": 24584
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T20:55:34.494Z"
  },
  {
      "idhistorico": 89,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-04T22:51:18.661Z",
          "valorTotal": 127332
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-25T08:32:16.699Z"
  },
  {
      "idhistorico": 90,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-04T03:51:10.518Z",
          "valorTotal": 34516
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-10T02:28:50.425Z"
  },
  {
      "idhistorico": 91,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-07T23:05:43.830Z",
          "valorTotal": 205925
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-11T17:26:39.823Z"
  },
  {
      "idhistorico": 92,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-18T20:45:37.421Z",
          "valorTotal": 58619
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-08T00:33:55.018Z"
  },
  {
      "idhistorico": 93,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-18T10:53:21.764Z",
          "valorTotal": 23519
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-12T23:08:57.350Z"
  },
  {
      "idhistorico": 94,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-28T01:09:21.692Z",
          "valorTotal": 130656
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-16T11:01:41.909Z"
  },
  {
      "idhistorico": 95,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-08T22:26:38.059Z",
          "valorTotal": 94414
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-08T00:32:06.095Z"
  },
  {
      "idhistorico": 96,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-04T13:59:22.508Z",
          "valorTotal": 207982
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-23T09:57:07.078Z"
  },
  {
      "idhistorico": 97,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-20T19:05:34.497Z",
          "valorTotal": 239009
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-04T08:17:52.043Z"
  },
  {
      "idhistorico": 98,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-05T17:32:21.822Z",
          "valorTotal": 190863
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-04T13:59:32.710Z"
  },
  {
      "idhistorico": 99,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-05T09:04:43.209Z",
          "valorTotal": 73561
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-14T01:15:47.635Z"
  },
  {
      "idhistorico": 100,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-19T00:38:04.524Z",
          "valorTotal": 201869
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-07T13:24:39.709Z"
  },
  {
      "idhistorico": 101,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-26T08:54:56.045Z",
          "valorTotal": 93642
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-21T05:36:55.073Z"
  },
  {
      "idhistorico": 102,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-27T14:34:12.365Z",
          "valorTotal": 70979
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-10T09:57:35.904Z"
  },
  {
      "idhistorico": 103,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-30T02:59:54.167Z",
          "valorTotal": 124654
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-16T19:39:45.299Z"
  },
  {
      "idhistorico": 104,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-18T23:20:57.467Z",
          "valorTotal": 60083
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-14T02:11:04.711Z"
  },
  {
      "idhistorico": 105,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-08-04T13:39:11.315Z",
          "valorTotal": 132623
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-27T16:46:45.579Z"
  },
  {
      "idhistorico": 106,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-14T03:40:30.423Z",
          "valorTotal": 63747
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-04T11:17:45.965Z"
  },
  {
      "idhistorico": 107,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-16T22:15:05.499Z",
          "valorTotal": 106624
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T11:47:32.498Z"
  },
  {
      "idhistorico": 108,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
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
          "fechacreado": "2021-04-23T09:34:12.434Z",
          "valorTotal": 108839
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-19T03:41:01.075Z"
  },
  {
      "idhistorico": 109,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-102",
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
          "fechacreado": "2021-01-23T20:00:48.869Z",
          "valorTotal": 235348
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-27T02:56:16.807Z"
  },
  {
      "idhistorico": 110,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-30T22:03:30.564Z",
          "valorTotal": 158765
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-27T20:27:03.500Z"
  },
  {
      "idhistorico": 111,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-07-01T06:02:46.619Z",
          "valorTotal": 62200
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-25T22:09:28.986Z"
  },
  {
      "idhistorico": 112,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-10T10:59:53.949Z",
          "valorTotal": 182977
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-15T16:53:28.538Z"
  },
  {
      "idhistorico": 113,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-20T16:28:49.689Z",
          "valorTotal": 139809
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-21T09:47:09.901Z"
  },
  {
      "idhistorico": 114,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-29T06:49:53.701Z",
          "valorTotal": 228005
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-01T04:25:13.774Z"
  },
  {
      "idhistorico": 115,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-03T10:44:59.426Z",
          "valorTotal": 71209
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-28T00:38:29.074Z"
  },
  {
      "idhistorico": 116,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-01T00:38:38.231Z",
          "valorTotal": 113483
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-19T22:24:11.983Z"
  },
  {
      "idhistorico": 117,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-20T05:51:16.980Z",
          "valorTotal": 217305
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-13T08:44:46.449Z"
  },
  {
      "idhistorico": 118,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-23T12:36:40.562Z",
          "valorTotal": 214198
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-29T04:10:36.625Z"
  },
  {
      "idhistorico": 119,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-23T10:37:21.319Z",
          "valorTotal": 172057
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-23T05:25:30.782Z"
  },
  {
      "idhistorico": 120,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-01T11:33:22.645Z",
          "valorTotal": 93745
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-31T13:03:00.013Z"
  },
  {
      "idhistorico": 121,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-30T17:10:08.795Z",
          "valorTotal": 190084
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T05:01:42.134Z"
  },
  {
      "idhistorico": 122,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-02T15:17:50.922Z",
          "valorTotal": 155749
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-27T00:50:37.876Z"
  },
  {
      "idhistorico": 123,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-08-11T15:01:25.869Z",
          "valorTotal": 141052
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-14T23:56:22.319Z"
  },
  {
      "idhistorico": 124,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-21T15:06:07.451Z",
          "valorTotal": 45931
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-19T21:35:21.290Z"
  },
  {
      "idhistorico": 125,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-31T18:56:14.451Z",
          "valorTotal": 142600
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-04T02:46:30.150Z"
  },
  {
      "idhistorico": 126,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-17T04:53:57.305Z",
          "valorTotal": 131690
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-09T22:28:14.389Z"
  },
  {
      "idhistorico": 127,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-22T07:22:58.642Z",
          "valorTotal": 51355
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-23T19:11:51.591Z"
  },
  {
      "idhistorico": 128,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-16T00:29:36.778Z",
          "valorTotal": 182259
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-22T00:53:55.570Z"
  },
  {
      "idhistorico": 129,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-07T12:48:10.447Z",
          "valorTotal": 144702
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-08T22:23:43.399Z"
  },
  {
      "idhistorico": 130,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-25T18:19:24.142Z",
          "valorTotal": 238299
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-17T07:39:27.752Z"
  },
  {
      "idhistorico": 131,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-15T14:05:12.403Z",
          "valorTotal": 180545
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-30T14:24:19.477Z"
  },
  {
      "idhistorico": 132,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-06T22:20:56.114Z",
          "valorTotal": 78054
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-21T19:56:24.657Z"
  },
  {
      "idhistorico": 133,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-07-30T21:58:30.761Z",
          "valorTotal": 93151
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-29T13:58:59.670Z"
  },
  {
      "idhistorico": 134,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-11T04:39:01.514Z",
          "valorTotal": 83986
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-22T02:03:03.474Z"
  },
  {
      "idhistorico": 135,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-02T03:15:27.957Z",
          "valorTotal": 214779
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-08T12:52:45.908Z"
  },
  {
      "idhistorico": 136,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-19T00:48:35.170Z",
          "valorTotal": 28657
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-31T23:50:21.422Z"
  },
  {
      "idhistorico": 137,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-25T03:09:37.187Z",
          "valorTotal": 211270
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-25T16:35:00.620Z"
  },
  {
      "idhistorico": 138,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-29T08:16:50.094Z",
          "valorTotal": 143512
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T01:03:58.460Z"
  },
  {
      "idhistorico": 139,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-18T17:13:09.657Z",
          "valorTotal": 46134
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-02T00:44:21.364Z"
  },
  {
      "idhistorico": 140,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-22T21:08:45.874Z",
          "valorTotal": 246890
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-16T23:28:59.025Z"
  },
  {
      "idhistorico": 141,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-17T01:30:40.643Z",
          "valorTotal": 145234
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-08T04:39:03.034Z"
  },
  {
      "idhistorico": 142,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-01T18:11:26.424Z",
          "valorTotal": 131150
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T16:23:37.102Z"
  },
  {
      "idhistorico": 143,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-21T05:23:19.831Z",
          "valorTotal": 85798
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-22T22:40:01.852Z"
  },
  {
      "idhistorico": 144,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-16T17:51:41.038Z",
          "valorTotal": 49038
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T08:03:37.426Z"
  },
  {
      "idhistorico": 145,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-27T11:43:15.067Z",
          "valorTotal": 64039
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-16T06:01:05.127Z"
  },
  {
      "idhistorico": 146,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-26T06:46:14.195Z",
          "valorTotal": 61829
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-03T01:57:20.292Z"
  },
  {
      "idhistorico": 147,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-04-26T19:34:58.544Z",
          "valorTotal": 176074
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-13T02:12:05.230Z"
  },
  {
      "idhistorico": 148,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-06-23T21:03:40.959Z",
          "valorTotal": 144831
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-28T06:59:27.729Z"
  },
  {
      "idhistorico": 149,
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
          "totalProductos": 5,
          "fechacreado": "2021-08-02T01:50:05.011Z",
          "valorTotal": 216285
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-10T03:03:58.402Z"
  },
  {
      "idhistorico": 150,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-11T13:24:08.233Z",
          "valorTotal": 90541
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-17T12:01:01.677Z"
  },
  {
      "idhistorico": 151,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-04T01:02:05.024Z",
          "valorTotal": 157506
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-09T20:59:17.794Z"
  },
  {
      "idhistorico": 152,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-18T16:42:40.330Z",
          "valorTotal": 129441
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-16T18:12:03.676Z"
  },
  {
      "idhistorico": 153,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-12T23:54:08.890Z",
          "valorTotal": 20355
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-16T00:22:15.435Z"
  },
  {
      "idhistorico": 154,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-06T08:37:30.178Z",
          "valorTotal": 160055
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-29T13:16:36.332Z"
  },
  {
      "idhistorico": 155,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-19T15:50:06.945Z",
          "valorTotal": 143912
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-30T17:07:23.368Z"
  },
  {
      "idhistorico": 156,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-21T17:09:55.587Z",
          "valorTotal": 83315
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-02T14:57:54.251Z"
  },
  {
      "idhistorico": 157,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-07T16:25:53.522Z",
          "valorTotal": 112122
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-26T16:09:21.829Z"
  },
  {
      "idhistorico": 158,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-08-09T17:11:08.136Z",
          "valorTotal": 191549
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-09T01:25:11.435Z"
  },
  {
      "idhistorico": 159,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-02-20T01:54:57.973Z",
          "valorTotal": 151308
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-30T05:07:00.199Z"
  },
  {
      "idhistorico": 160,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-11T11:00:48.423Z",
          "valorTotal": 208603
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-05T04:23:39.169Z"
  },
  {
      "idhistorico": 161,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-24T00:08:59.682Z",
          "valorTotal": 101469
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-01T12:52:15.037Z"
  },
  {
      "idhistorico": 162,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-23T13:48:16.518Z",
          "valorTotal": 102871
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-28T12:48:26.993Z"
  },
  {
      "idhistorico": 163,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-10T00:50:46.077Z",
          "valorTotal": 65183
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-12T18:51:50.755Z"
  },
  {
      "idhistorico": 164,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-11T07:41:19.846Z",
          "valorTotal": 177383
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-17T16:33:23.562Z"
  },
  {
      "idhistorico": 165,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-24T14:10:33.062Z",
          "valorTotal": 158654
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-29T08:33:17.177Z"
  },
  {
      "idhistorico": 166,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-02T02:27:03.240Z",
          "valorTotal": 81619
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-01T06:09:31.257Z"
  },
  {
      "idhistorico": 167,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-29T13:34:44.068Z",
          "valorTotal": 90455
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-24T06:18:50.041Z"
  },
  {
      "idhistorico": 168,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-07-22T00:49:38.071Z",
          "valorTotal": 238734
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-22T11:30:25.177Z"
  },
  {
      "idhistorico": 169,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-05T03:59:14.738Z",
          "valorTotal": 232064
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-03T04:46:08.918Z"
  },
  {
      "idhistorico": 170,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-10T02:53:44.996Z",
          "valorTotal": 21151
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-24T04:19:38.806Z"
  },
  {
      "idhistorico": 171,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-28T05:45:03.921Z",
          "valorTotal": 134630
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T20:18:58.064Z"
  },
  {
      "idhistorico": 172,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-12T11:31:01.884Z",
          "valorTotal": 240561
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-21T20:51:17.583Z"
  },
  {
      "idhistorico": 173,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-07T05:14:38.447Z",
          "valorTotal": 166389
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-06T21:44:37.965Z"
  },
  {
      "idhistorico": 174,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-13T16:10:40.776Z",
          "valorTotal": 163139
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-01T13:11:08.039Z"
  },
  {
      "idhistorico": 175,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-26T03:16:19.841Z",
          "valorTotal": 148655
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-14T01:51:21.665Z"
  },
  {
      "idhistorico": 176,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-03T16:37:30.051Z",
          "valorTotal": 205741
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-04T17:17:48.359Z"
  },
  {
      "idhistorico": 177,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-14T11:53:03.464Z",
          "valorTotal": 127248
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-16T13:34:31.614Z"
  },
  {
      "idhistorico": 178,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-13T14:36:09.847Z",
          "valorTotal": 211387
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-16T06:07:36.940Z"
  },
  {
      "idhistorico": 179,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-03-19T02:54:39.648Z",
          "valorTotal": 107364
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-27T11:55:43.132Z"
  },
  {
      "idhistorico": 180,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-02T06:52:25.309Z",
          "valorTotal": 197086
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-05T23:41:44.630Z"
  },
  {
      "idhistorico": 181,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-01T11:28:39.847Z",
          "valorTotal": 56560
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-26T11:23:59.056Z"
  },
  {
      "idhistorico": 182,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-01-15T00:43:17.369Z",
          "valorTotal": 142944
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-20T20:17:30.506Z"
  },
  {
      "idhistorico": 183,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-02-24T12:03:06.337Z",
          "valorTotal": 225416
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-24T08:08:41.312Z"
  },
  {
      "idhistorico": 184,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-22T16:19:33.022Z",
          "valorTotal": 85398
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-16T09:46:27.279Z"
  },
  {
      "idhistorico": 185,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-07-23T19:41:45.499Z",
          "valorTotal": 181437
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-19T02:51:18.489Z"
  },
  {
      "idhistorico": 186,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-15T06:42:41.575Z",
          "valorTotal": 220714
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-17T10:09:12.887Z"
  },
  {
      "idhistorico": 187,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-10T03:14:41.720Z",
          "valorTotal": 107792
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-03T09:52:50.424Z"
  },
  {
      "idhistorico": 188,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-24T04:10:47.736Z",
          "valorTotal": 148684
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-01T02:30:46.012Z"
  },
  {
      "idhistorico": 189,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-16T13:33:32.688Z",
          "valorTotal": 73072
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-11T18:56:12.415Z"
  },
  {
      "idhistorico": 190,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-31T16:00:59.591Z",
          "valorTotal": 185475
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-06T07:38:34.124Z"
  },
  {
      "idhistorico": 191,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-27T22:16:24.248Z",
          "valorTotal": 123850
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-28T12:25:24.933Z"
  },
  {
      "idhistorico": 192,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-29T06:39:19.649Z",
          "valorTotal": 242903
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-25T10:12:33.200Z"
  },
  {
      "idhistorico": 193,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-24T16:33:42.599Z",
          "valorTotal": 54529
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-06T20:36:33.713Z"
  },
  {
      "idhistorico": 194,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-02T06:26:17.149Z",
          "valorTotal": 113128
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-06T05:11:15.517Z"
  },
  {
      "idhistorico": 195,
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
          "totalProductos": 1,
          "fechacreado": "2021-08-04T03:23:28.046Z",
          "valorTotal": 234685
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T18:27:45.509Z"
  },
  {
      "idhistorico": 196,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-17T03:17:42.383Z",
          "valorTotal": 81117
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-19T20:08:35.202Z"
  },
  {
      "idhistorico": 197,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-06T19:57:05.947Z",
          "valorTotal": 211909
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-21T08:43:02.137Z"
  },
  {
      "idhistorico": 198,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-02-22T15:30:00.959Z",
          "valorTotal": 143017
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-24T08:23:01.996Z"
  },
  {
      "idhistorico": 199,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-14T21:56:01.570Z",
          "valorTotal": 237321
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-15T23:22:52.181Z"
  },
  {
      "idhistorico": 200,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-08T05:25:33.017Z",
          "valorTotal": 117361
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-20T19:07:41.200Z"
  },
  {
      "idhistorico": 201,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-18T09:34:16.498Z",
          "valorTotal": 25862
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-08T16:27:18.785Z"
  },
  {
      "idhistorico": 202,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-05-05T01:51:56.738Z",
          "valorTotal": 20116
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-24T19:08:31.191Z"
  },
  {
      "idhistorico": 203,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-30T06:45:43.528Z",
          "valorTotal": 98224
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-26T13:39:11.511Z"
  },
  {
      "idhistorico": 204,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-01T16:55:03.374Z",
          "valorTotal": 62981
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-30T05:17:34.125Z"
  },
  {
      "idhistorico": 205,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-14T20:06:49.674Z",
          "valorTotal": 128527
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-02T04:01:36.557Z"
  },
  {
      "idhistorico": 206,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-29T15:46:28.646Z",
          "valorTotal": 98082
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-21T22:56:35.570Z"
  },
  {
      "idhistorico": 207,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 4,
          "fechacreado": "2021-08-02T22:30:56.389Z",
          "valorTotal": 216421
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-28T22:12:00.693Z"
  },
  {
      "idhistorico": 208,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-01-16T17:30:59.736Z",
          "valorTotal": 245267
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-20T12:29:19.423Z"
  },
  {
      "idhistorico": 209,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-01-16T09:53:23.016Z",
          "valorTotal": 207649
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-10T18:13:17.177Z"
  },
  {
      "idhistorico": 210,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-10T07:24:30.824Z",
          "valorTotal": 221723
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-06T04:33:01.871Z"
  },
  {
      "idhistorico": 211,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-13T01:58:44.278Z",
          "valorTotal": 118221
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-12T01:38:34.037Z"
  },
  {
      "idhistorico": 212,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-16T07:52:03.793Z",
          "valorTotal": 84660
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-16T06:42:26.251Z"
  },
  {
      "idhistorico": 213,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-01T09:13:41.293Z",
          "valorTotal": 240488
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-22T14:40:03.815Z"
  },
  {
      "idhistorico": 214,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-03T21:04:07.184Z",
          "valorTotal": 211185
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-04T17:10:56.782Z"
  },
  {
      "idhistorico": 215,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-12T23:18:57.622Z",
          "valorTotal": 169463
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-26T20:40:35.776Z"
  },
  {
      "idhistorico": 216,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-26T23:09:33.497Z",
          "valorTotal": 216314
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-06T09:37:19.212Z"
  },
  {
      "idhistorico": 217,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-20T22:30:12.823Z",
          "valorTotal": 104304
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-12T03:59:31.044Z"
  },
  {
      "idhistorico": 218,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-02-25T02:14:52.241Z",
          "valorTotal": 46060
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-05T05:33:04.178Z"
  },
  {
      "idhistorico": 219,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-04-16T08:13:31.588Z",
          "valorTotal": 246392
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-27T09:48:09.829Z"
  },
  {
      "idhistorico": 220,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-07T13:07:03.664Z",
          "valorTotal": 206953
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-19T04:00:36.430Z"
  },
  {
      "idhistorico": 221,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-07-20T23:06:40.481Z",
          "valorTotal": 175413
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-17T18:19:54.982Z"
  },
  {
      "idhistorico": 222,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-24T15:15:50.448Z",
          "valorTotal": 105437
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-26T07:08:49.256Z"
  },
  {
      "idhistorico": 223,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-11T01:51:25.147Z",
          "valorTotal": 226413
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-04T17:06:59.146Z"
  },
  {
      "idhistorico": 224,
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
          "fechacreado": "2021-02-22T07:22:03.674Z",
          "valorTotal": 192156
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-19T21:30:55.481Z"
  },
  {
      "idhistorico": 225,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-08-08T13:51:33.100Z",
          "valorTotal": 145710
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-26T14:34:16.895Z"
  },
  {
      "idhistorico": 226,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-04-20T16:46:22.134Z",
          "valorTotal": 230296
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-28T20:23:13.098Z"
  },
  {
      "idhistorico": 227,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-04-07T01:37:01.137Z",
          "valorTotal": 244579
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-19T08:03:11.281Z"
  },
  {
      "idhistorico": 228,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-16T00:27:06.567Z",
          "valorTotal": 114686
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-08T16:06:30.191Z"
  },
  {
      "idhistorico": 229,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-11T05:03:59.474Z",
          "valorTotal": 148950
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-21T16:01:27.662Z"
  },
  {
      "idhistorico": 230,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-11T09:16:55.576Z",
          "valorTotal": 132541
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-09T04:35:53.477Z"
  },
  {
      "idhistorico": 231,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-01-10T00:00:53.517Z",
          "valorTotal": 67911
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-12T21:03:25.442Z"
  },
  {
      "idhistorico": 232,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-02T12:50:11.195Z",
          "valorTotal": 184805
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-24T20:31:58.530Z"
  },
  {
      "idhistorico": 233,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-07-26T22:05:56.785Z",
          "valorTotal": 51093
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-27T12:23:04.614Z"
  },
  {
      "idhistorico": 234,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-08-01T03:55:09.157Z",
          "valorTotal": 176101
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-06T09:57:31.564Z"
  },
  {
      "idhistorico": 235,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-18T02:22:35.715Z",
          "valorTotal": 235115
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-11T05:45:32.204Z"
  },
  {
      "idhistorico": 236,
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
          "fechacreado": "2021-02-11T09:09:23.685Z",
          "valorTotal": 125286
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-05T05:09:29.670Z"
  },
  {
      "idhistorico": 237,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 2,
          "fechacreado": "2021-08-09T15:46:57.174Z",
          "valorTotal": 56347
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-22T10:57:57.432Z"
  },
  {
      "idhistorico": 238,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-09T20:26:43.355Z",
          "valorTotal": 157810
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-09T08:45:54.666Z"
  },
  {
      "idhistorico": 239,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-26T12:21:33.539Z",
          "valorTotal": 217599
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-08T11:10:46.933Z"
  },
  {
      "idhistorico": 240,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-04T19:42:46.757Z",
          "valorTotal": 189252
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-06T10:52:35.397Z"
  },
  {
      "idhistorico": 241,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-02-01T04:56:08.782Z",
          "valorTotal": 129152
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-11T21:50:14.133Z"
  },
  {
      "idhistorico": 242,
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
          "fechacreado": "2021-07-19T21:30:49.238Z",
          "valorTotal": 189608
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-23T11:36:02.699Z"
  },
  {
      "idhistorico": 243,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-06T02:23:35.071Z",
          "valorTotal": 37799
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-11T14:30:32.145Z"
  },
  {
      "idhistorico": 244,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-27T10:48:11.454Z",
          "valorTotal": 199778
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-05T17:09:43.132Z"
  },
  {
      "idhistorico": 245,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-26T14:19:20.804Z",
          "valorTotal": 28262
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-13T01:51:48.427Z"
  },
  {
      "idhistorico": 246,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-06-17T00:28:56.329Z",
          "valorTotal": 159404
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-05T18:45:24.146Z"
  },
  {
      "idhistorico": 247,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-19T06:11:03.208Z",
          "valorTotal": 151345
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-04T13:14:59.504Z"
  },
  {
      "idhistorico": 248,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-18T09:57:22.654Z",
          "valorTotal": 59755
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-19T19:39:44.130Z"
  },
  {
      "idhistorico": 249,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-03-29T15:34:13.889Z",
          "valorTotal": 110669
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-20T07:12:52.598Z"
  },
  {
      "idhistorico": 250,
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
          "fechacreado": "2021-01-03T01:03:32.239Z",
          "valorTotal": 172001
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-23T14:07:57.803Z"
  },
  {
      "idhistorico": 251,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-01T14:25:40.421Z",
          "valorTotal": 205068
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-08T00:38:42.325Z"
  },
  {
      "idhistorico": 252,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-12T10:14:56.347Z",
          "valorTotal": 53467
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-16T09:38:13.408Z"
  },
  {
      "idhistorico": 253,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-03T10:19:05.587Z",
          "valorTotal": 68647
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-13T16:00:56.794Z"
  },
  {
      "idhistorico": 254,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-11T17:38:19.466Z",
          "valorTotal": 160429
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-21T19:14:58.144Z"
  },
  {
      "idhistorico": 255,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-18T00:17:23.212Z",
          "valorTotal": 199635
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-03T07:05:15.313Z"
  },
  {
      "idhistorico": 256,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-14T02:49:57.522Z",
          "valorTotal": 159971
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-16T11:37:11.972Z"
  },
  {
      "idhistorico": 257,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-02-07T14:08:51.737Z",
          "valorTotal": 196462
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-21T15:40:02.745Z"
  },
  {
      "idhistorico": 258,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-04-05T15:44:34.073Z",
          "valorTotal": 39912
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-30T21:11:17.795Z"
  },
  {
      "idhistorico": 259,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-03T06:28:10.603Z",
          "valorTotal": 97455
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-27T01:02:05.399Z"
  },
  {
      "idhistorico": 260,
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
          "fechacreado": "2021-05-02T12:14:58.177Z",
          "valorTotal": 161596
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-05T09:39:33.919Z"
  },
  {
      "idhistorico": 261,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-29T08:46:10.589Z",
          "valorTotal": 194604
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-11T04:52:28.422Z"
  },
  {
      "idhistorico": 262,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-23T14:43:15.692Z",
          "valorTotal": 179676
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-27T12:22:15.477Z"
  },
  {
      "idhistorico": 263,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-26T12:05:23.634Z",
          "valorTotal": 29183
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-23T22:09:55.835Z"
  },
  {
      "idhistorico": 264,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-23T11:11:01.509Z",
          "valorTotal": 118170
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-27T11:52:13.944Z"
  },
  {
      "idhistorico": 265,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-27T03:42:21.164Z",
          "valorTotal": 99983
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-07T18:45:48.496Z"
  },
  {
      "idhistorico": 266,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-26T08:02:03.514Z",
          "valorTotal": 238127
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-23T21:19:53.465Z"
  },
  {
      "idhistorico": 267,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-08-03T19:11:55.396Z",
          "valorTotal": 26161
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-09T04:37:10.654Z"
  },
  {
      "idhistorico": 268,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-04T17:43:25.140Z",
          "valorTotal": 96377
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-16T01:46:23.224Z"
  },
  {
      "idhistorico": 269,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-27T06:53:51.107Z",
          "valorTotal": 114827
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-18T06:38:17.938Z"
  },
  {
      "idhistorico": 270,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-13T05:04:53.094Z",
          "valorTotal": 206760
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-29T11:23:24.146Z"
  },
  {
      "idhistorico": 271,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-04T22:58:45.775Z",
          "valorTotal": 203734
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-14T05:24:48.288Z"
  },
  {
      "idhistorico": 272,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-03-03T12:14:13.649Z",
          "valorTotal": 166560
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-13T23:38:48.936Z"
  },
  {
      "idhistorico": 273,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-12T23:18:51.894Z",
          "valorTotal": 202073
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-26T09:00:19.090Z"
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
              "id": "81",
              "name": "Drogas la Rebaja"
          },
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-29T14:04:11.776Z",
          "valorTotal": 31276
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-17T09:57:37.846Z"
  },
  {
      "idhistorico": 275,
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
          "fechacreado": "2021-05-17T04:14:47.572Z",
          "valorTotal": 142350
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-05T05:48:12.800Z"
  },
  {
      "idhistorico": 276,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-25T16:22:00.303Z",
          "valorTotal": 105475
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-06T05:50:17.094Z"
  },
  {
      "idhistorico": 277,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-06-14T15:35:40.495Z",
          "valorTotal": 165062
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-27T22:55:41.122Z"
  },
  {
      "idhistorico": 278,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-02-05T13:26:44.556Z",
          "valorTotal": 94250
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-19T12:58:02.460Z"
  },
  {
      "idhistorico": 279,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-24T11:56:49.447Z",
          "valorTotal": 34690
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-27T00:29:37.908Z"
  },
  {
      "idhistorico": 280,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-14T19:47:38.466Z",
          "valorTotal": 87461
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-03T08:06:12.744Z"
  },
  {
      "idhistorico": 281,
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
          "totalProductos": 2,
          "fechacreado": "2021-08-08T01:30:40.502Z",
          "valorTotal": 24285
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-05T17:49:42.289Z"
  },
  {
      "idhistorico": 282,
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
          "fechacreado": "2021-06-13T13:09:34.063Z",
          "valorTotal": 96890
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-18T09:21:11.082Z"
  },
  {
      "idhistorico": 283,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-05T04:27:53.688Z",
          "valorTotal": 202581
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-02T17:49:39.763Z"
  },
  {
      "idhistorico": 284,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-28T08:31:32.501Z",
          "valorTotal": 174542
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-13T21:01:14.960Z"
  },
  {
      "idhistorico": 285,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-30T04:40:40.059Z",
          "valorTotal": 73822
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-22T10:16:57.132Z"
  },
  {
      "idhistorico": 286,
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
          "fechacreado": "2021-01-09T21:01:02.965Z",
          "valorTotal": 52952
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-22T22:26:40.749Z"
  },
  {
      "idhistorico": 287,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-20T02:09:33.260Z",
          "valorTotal": 63902
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-25T23:55:17.484Z"
  },
  {
      "idhistorico": 288,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-12T07:09:06.968Z",
          "valorTotal": 211645
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-26T01:58:51.740Z"
  },
  {
      "idhistorico": 289,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-12T11:50:43.043Z",
          "valorTotal": 116625
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-10T21:25:48.349Z"
  },
  {
      "idhistorico": 290,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-23T01:29:13.544Z",
          "valorTotal": 94472
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-11T11:39:52.902Z"
  },
  {
      "idhistorico": 291,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-07T09:32:34.892Z",
          "valorTotal": 92382
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-29T08:55:47.051Z"
  },
  {
      "idhistorico": 292,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-08-09T11:52:39.000Z",
          "valorTotal": 225401
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-21T11:55:24.825Z"
  },
  {
      "idhistorico": 293,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-01T22:07:22.935Z",
          "valorTotal": 196692
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-06T09:12:59.715Z"
  },
  {
      "idhistorico": 294,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-04-19T21:43:47.215Z",
          "valorTotal": 75660
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-29T17:35:25.749Z"
  },
  {
      "idhistorico": 295,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-13T14:15:32.908Z",
          "valorTotal": 227011
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-24T01:11:41.629Z"
  },
  {
      "idhistorico": 296,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-13T06:40:00.675Z",
          "valorTotal": 53759
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-03T14:50:21.168Z"
  },
  {
      "idhistorico": 297,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-04-05T04:48:23.315Z",
          "valorTotal": 195855
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-02T06:27:28.188Z"
  },
  {
      "idhistorico": 298,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-08T06:42:30.019Z",
          "valorTotal": 224233
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-30T15:58:22.856Z"
  },
  {
      "idhistorico": 299,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-20T02:19:03.188Z",
          "valorTotal": 71676
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-18T16:24:42.047Z"
  },
  {
      "idhistorico": 300,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-22T10:05:40.411Z",
          "valorTotal": 48855
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-30T02:20:14.211Z"
  },
  {
      "idhistorico": 301,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-102",
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
          "fechacreado": "2021-07-25T03:42:00.645Z",
          "valorTotal": 210530
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-04T19:21:05.319Z"
  },
  {
      "idhistorico": 302,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-03-27T07:06:00.675Z",
          "valorTotal": 142108
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-04T22:59:52.859Z"
  },
  {
      "idhistorico": 303,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-02T05:13:10.026Z",
          "valorTotal": 161411
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-23T06:32:45.208Z"
  },
  {
      "idhistorico": 304,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-31T23:44:50.868Z",
          "valorTotal": 166955
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-22T18:14:56.214Z"
  },
  {
      "idhistorico": 305,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-28T13:07:44.672Z",
          "valorTotal": 188132
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-17T02:02:59.284Z"
  },
  {
      "idhistorico": 306,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-08-06T15:29:17.160Z",
          "valorTotal": 204697
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-24T06:29:38.631Z"
  },
  {
      "idhistorico": 307,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-03-08T02:39:46.255Z",
          "valorTotal": 152577
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-13T13:44:54.874Z"
  },
  {
      "idhistorico": 308,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-01-02T20:06:30.421Z",
          "valorTotal": 152996
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-30T00:47:09.312Z"
  },
  {
      "idhistorico": 309,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-08-10T21:51:06.521Z",
          "valorTotal": 170457
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T12:24:33.240Z"
  },
  {
      "idhistorico": 310,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-23T10:05:19.520Z",
          "valorTotal": 122205
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-28T01:23:43.815Z"
  },
  {
      "idhistorico": 311,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-16T10:03:43.996Z",
          "valorTotal": 201442
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T10:43:25.161Z"
  },
  {
      "idhistorico": 312,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-02T20:36:55.763Z",
          "valorTotal": 173506
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-28T01:10:48.899Z"
  },
  {
      "idhistorico": 313,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-03T20:23:26.273Z",
          "valorTotal": 221831
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-02T07:12:27.533Z"
  },
  {
      "idhistorico": 314,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-24T23:28:53.443Z",
          "valorTotal": 181926
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-05T22:21:10.744Z"
  },
  {
      "idhistorico": 315,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-04-14T21:57:57.922Z",
          "valorTotal": 88259
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-19T01:29:53.380Z"
  },
  {
      "idhistorico": 316,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-24T05:50:47.706Z",
          "valorTotal": 182712
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-16T19:51:14.295Z"
  },
  {
      "idhistorico": 317,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-24T14:28:09.426Z",
          "valorTotal": 132143
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-25T18:34:18.227Z"
  },
  {
      "idhistorico": 318,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-30T21:07:35.755Z",
          "valorTotal": 178940
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-06T07:19:13.289Z"
  },
  {
      "idhistorico": 319,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-25T15:11:22.967Z",
          "valorTotal": 44230
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-30T14:56:29.477Z"
  },
  {
      "idhistorico": 320,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-15T14:11:24.118Z",
          "valorTotal": 242460
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-02T22:45:13.521Z"
  },
  {
      "idhistorico": 321,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-08T11:13:18.024Z",
          "valorTotal": 70723
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-18T15:22:11.131Z"
  },
  {
      "idhistorico": 322,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-25T02:44:44.616Z",
          "valorTotal": 84195
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-07T09:35:24.082Z"
  },
  {
      "idhistorico": 323,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-04T14:38:09.932Z",
          "valorTotal": 208190
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-20T02:02:34.405Z"
  },
  {
      "idhistorico": 324,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-20T11:21:42.919Z",
          "valorTotal": 246946
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-29T08:09:24.230Z"
  },
  {
      "idhistorico": 325,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-16T18:46:41.853Z",
          "valorTotal": 47052
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-22T21:38:55.377Z"
  },
  {
      "idhistorico": 326,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-17T09:22:51.443Z",
          "valorTotal": 112340
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-10T07:48:49.805Z"
  },
  {
      "idhistorico": 327,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-05T21:09:28.608Z",
          "valorTotal": 227115
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-14T00:52:04.526Z"
  },
  {
      "idhistorico": 328,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-11T10:49:46.001Z",
          "valorTotal": 115497
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-05T06:13:52.867Z"
  },
  {
      "idhistorico": 329,
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
          "fechacreado": "2021-07-31T18:29:26.526Z",
          "valorTotal": 223658
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T13:47:32.607Z"
  },
  {
      "idhistorico": 330,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-04T20:24:10.892Z",
          "valorTotal": 186657
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-10T23:44:02.427Z"
  },
  {
      "idhistorico": 331,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-18T09:28:54.699Z",
          "valorTotal": 96022
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-21T08:31:33.633Z"
  },
  {
      "idhistorico": 332,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-02-26T01:42:29.679Z",
          "valorTotal": 110950
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-23T09:36:41.875Z"
  },
  {
      "idhistorico": 333,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-01-31T04:57:46.627Z",
          "valorTotal": 38520
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-10T10:29:14.772Z"
  },
  {
      "idhistorico": 334,
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
          "fechacreado": "2021-06-29T02:20:32.912Z",
          "valorTotal": 189442
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-12T18:15:18.153Z"
  },
  {
      "idhistorico": 335,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-02T11:17:28.350Z",
          "valorTotal": 115345
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-21T21:01:44.666Z"
  },
  {
      "idhistorico": 336,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-04-15T00:12:08.273Z",
          "valorTotal": 234739
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-15T14:35:08.478Z"
  },
  {
      "idhistorico": 337,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-09T11:10:34.525Z",
          "valorTotal": 214972
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T05:24:45.618Z"
  },
  {
      "idhistorico": 338,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-23T03:02:20.668Z",
          "valorTotal": 103147
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-12T10:50:50.701Z"
  },
  {
      "idhistorico": 339,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-13T18:21:35.365Z",
          "valorTotal": 54931
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-12T16:49:26.695Z"
  },
  {
      "idhistorico": 340,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-15T22:43:27.739Z",
          "valorTotal": 237002
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-09T00:14:50.783Z"
  },
  {
      "idhistorico": 341,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-10T01:21:50.743Z",
          "valorTotal": 37895
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-18T20:52:09.401Z"
  },
  {
      "idhistorico": 342,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-01-05T19:20:57.014Z",
          "valorTotal": 39410
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-05T23:29:03.142Z"
  },
  {
      "idhistorico": 343,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-01T05:16:47.131Z",
          "valorTotal": 114168
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-06T09:34:53.496Z"
  },
  {
      "idhistorico": 344,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-25T05:53:02.969Z",
          "valorTotal": 139426
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-29T18:34:25.044Z"
  },
  {
      "idhistorico": 345,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-07T10:11:25.169Z",
          "valorTotal": 127535
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-23T00:41:20.156Z"
  },
  {
      "idhistorico": 346,
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
          "totalProductos": 4,
          "fechacreado": "2021-08-05T00:44:43.535Z",
          "valorTotal": 127316
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-04T01:59:18.600Z"
  },
  {
      "idhistorico": 347,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-12T09:26:21.162Z",
          "valorTotal": 203430
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-23T04:20:02.509Z"
  },
  {
      "idhistorico": 348,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-20T03:07:32.111Z",
          "valorTotal": 193639
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-04T17:44:48.378Z"
  },
  {
      "idhistorico": 349,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-22T04:24:58.869Z",
          "valorTotal": 63212
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-29T11:08:38.020Z"
  },
  {
      "idhistorico": 350,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-03T21:27:13.291Z",
          "valorTotal": 87601
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-07T18:47:05.946Z"
  },
  {
      "idhistorico": 351,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-21T12:15:35.382Z",
          "valorTotal": 28562
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-26T09:09:34.578Z"
  },
  {
      "idhistorico": 352,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-08T05:30:46.750Z",
          "valorTotal": 231730
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-09T15:41:12.734Z"
  },
  {
      "idhistorico": 353,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-08T12:00:22.021Z",
          "valorTotal": 55046
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-27T22:55:08.569Z"
  },
  {
      "idhistorico": 354,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-05T23:17:56.919Z",
          "valorTotal": 216197
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-15T08:46:37.403Z"
  },
  {
      "idhistorico": 355,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-22T07:28:57.901Z",
          "valorTotal": 94243
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-09T05:07:20.028Z"
  },
  {
      "idhistorico": 356,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-19T19:18:07.302Z",
          "valorTotal": 197276
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-02T05:34:43.872Z"
  },
  {
      "idhistorico": 357,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-15T05:37:03.135Z",
          "valorTotal": 43606
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-28T06:12:26.269Z"
  },
  {
      "idhistorico": 358,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-05T18:58:26.096Z",
          "valorTotal": 85598
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-19T03:04:44.875Z"
  },
  {
      "idhistorico": 359,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-11T16:37:10.957Z",
          "valorTotal": 167823
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-19T03:10:38.668Z"
  },
  {
      "idhistorico": 360,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-03-24T23:53:19.104Z",
          "valorTotal": 53535
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-15T23:47:25.263Z"
  },
  {
      "idhistorico": 361,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-06-16T04:47:37.417Z",
          "valorTotal": 20509
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-10T17:05:44.523Z"
  },
  {
      "idhistorico": 362,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-04T07:59:09.231Z",
          "valorTotal": 35375
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-28T06:43:56.867Z"
  },
  {
      "idhistorico": 363,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-14T00:59:27.913Z",
          "valorTotal": 195004
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-29T23:04:40.181Z"
  },
  {
      "idhistorico": 364,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-03-11T20:32:40.130Z",
          "valorTotal": 146942
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-07T15:11:11.191Z"
  },
  {
      "idhistorico": 365,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-24T16:57:50.942Z",
          "valorTotal": 171510
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T23:20:57.740Z"
  },
  {
      "idhistorico": 366,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-14T23:13:04.388Z",
          "valorTotal": 65734
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-15T03:47:36.900Z"
  },
  {
      "idhistorico": 367,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-27T08:50:15.006Z",
          "valorTotal": 146705
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-24T19:28:18.454Z"
  },
  {
      "idhistorico": 368,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-06-22T17:13:20.372Z",
          "valorTotal": 168387
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-24T01:27:43.804Z"
  },
  {
      "idhistorico": 369,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-22T23:11:53.346Z",
          "valorTotal": 141632
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-21T13:11:49.893Z"
  },
  {
      "idhistorico": 370,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-05T00:23:01.865Z",
          "valorTotal": 233479
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-13T04:22:29.635Z"
  },
  {
      "idhistorico": 371,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-11T08:30:10.531Z",
          "valorTotal": 101563
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-05T03:24:32.165Z"
  },
  {
      "idhistorico": 372,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-05-18T23:13:39.883Z",
          "valorTotal": 144227
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-02T19:32:53.313Z"
  },
  {
      "idhistorico": 373,
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
          "fechacreado": "2021-05-11T06:42:48.657Z",
          "valorTotal": 84900
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-09T20:51:59.680Z"
  },
  {
      "idhistorico": 374,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-11T03:15:37.138Z",
          "valorTotal": 145412
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-23T17:01:42.866Z"
  },
  {
      "idhistorico": 375,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-13T02:48:15.088Z",
          "valorTotal": 47954
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-03T10:15:42.964Z"
  },
  {
      "idhistorico": 376,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-20T07:26:26.560Z",
          "valorTotal": 190779
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-27T22:45:58.155Z"
  },
  {
      "idhistorico": 377,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-10T20:38:29.456Z",
          "valorTotal": 44988
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T02:55:09.573Z"
  },
  {
      "idhistorico": 378,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-14T05:04:08.545Z",
          "valorTotal": 167995
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-18T07:59:10.863Z"
  },
  {
      "idhistorico": 379,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-07-25T17:15:23.749Z",
          "valorTotal": 153865
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-06T23:43:14.633Z"
  },
  {
      "idhistorico": 380,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-13T00:51:33.356Z",
          "valorTotal": 245965
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-13T17:49:14.592Z"
  },
  {
      "idhistorico": 381,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-07-19T03:59:14.247Z",
          "valorTotal": 77075
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-15T02:15:40.735Z"
  },
  {
      "idhistorico": 382,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-28T18:22:29.440Z",
          "valorTotal": 228180
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-21T17:49:27.606Z"
  },
  {
      "idhistorico": 383,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-08T02:03:54.140Z",
          "valorTotal": 106317
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-07T20:29:45.694Z"
  },
  {
      "idhistorico": 384,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-29T00:07:55.012Z",
          "valorTotal": 137097
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-03T06:49:59.481Z"
  },
  {
      "idhistorico": 385,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-21T00:41:17.569Z",
          "valorTotal": 115040
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-12T07:51:12.918Z"
  },
  {
      "idhistorico": 386,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-07-15T11:05:45.741Z",
          "valorTotal": 20648
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-09T04:48:20.341Z"
  },
  {
      "idhistorico": 387,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-03-01T21:23:14.220Z",
          "valorTotal": 68038
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-18T18:01:17.661Z"
  },
  {
      "idhistorico": 388,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-21T09:03:41.184Z",
          "valorTotal": 67449
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-07T02:23:55.672Z"
  },
  {
      "idhistorico": 389,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-05-14T05:53:49.377Z",
          "valorTotal": 155984
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-17T23:50:26.328Z"
  },
  {
      "idhistorico": 390,
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
          "fechacreado": "2021-03-30T17:31:14.607Z",
          "valorTotal": 173053
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-03T18:32:00.901Z"
  },
  {
      "idhistorico": 391,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-11T20:40:05.595Z",
          "valorTotal": 235009
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-30T04:18:03.295Z"
  },
  {
      "idhistorico": 392,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-11T21:03:45.446Z",
          "valorTotal": 230197
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-31T22:21:22.238Z"
  },
  {
      "idhistorico": 393,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-02T10:11:46.656Z",
          "valorTotal": 99750
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-30T19:10:48.562Z"
  },
  {
      "idhistorico": 394,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-11T22:00:34.370Z",
          "valorTotal": 249316
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-21T08:38:42.557Z"
  },
  {
      "idhistorico": 395,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-102",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-09T11:46:19.940Z",
          "valorTotal": 144092
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-05T12:58:30.371Z"
  },
  {
      "idhistorico": 396,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-07-11T01:56:58.593Z",
          "valorTotal": 82934
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-06T17:26:35.208Z"
  },
  {
      "idhistorico": 397,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-11T14:22:40.939Z",
          "valorTotal": 203589
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-05T05:55:22.245Z"
  },
  {
      "idhistorico": 398,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-24T08:03:27.782Z",
          "valorTotal": 144193
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-13T01:39:42.777Z"
  },
  {
      "idhistorico": 399,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-15T10:04:29.646Z",
          "valorTotal": 178104
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-24T17:42:56.103Z"
  },
  {
      "idhistorico": 400,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-28T10:59:16.170Z",
          "valorTotal": 206957
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-11T06:31:29.262Z"
  },
  {
      "idhistorico": 401,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-04-24T12:14:58.814Z",
          "valorTotal": 94618
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-28T17:15:24.999Z"
  },
  {
      "idhistorico": 402,
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
          "fechacreado": "2021-01-30T01:27:25.250Z",
          "valorTotal": 82506
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-01T05:51:47.633Z"
  },
  {
      "idhistorico": 403,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-05-25T15:43:02.133Z",
          "valorTotal": 198923
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-25T11:23:52.374Z"
  },
  {
      "idhistorico": 404,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-26T15:29:51.661Z",
          "valorTotal": 63766
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-22T23:44:48.920Z"
  },
  {
      "idhistorico": 405,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-06-06T07:37:45.819Z",
          "valorTotal": 227984
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-05T13:26:26.437Z"
  },
  {
      "idhistorico": 406,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-03-16T14:32:31.032Z",
          "valorTotal": 100007
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-17T17:14:28.641Z"
  },
  {
      "idhistorico": 407,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-01-25T22:54:08.957Z",
          "valorTotal": 215823
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-02T08:34:51.136Z"
  },
  {
      "idhistorico": 408,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-06-11T21:40:55.321Z",
          "valorTotal": 233589
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-15T23:31:22.959Z"
  },
  {
      "idhistorico": 409,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-17T07:12:24.814Z",
          "valorTotal": 177010
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-30T19:06:41.865Z"
  },
  {
      "idhistorico": 410,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-01T07:45:36.587Z",
          "valorTotal": 46782
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-29T23:24:51.003Z"
  },
  {
      "idhistorico": 411,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-06-08T18:52:00.378Z",
          "valorTotal": 210291
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-24T12:35:29.226Z"
  },
  {
      "idhistorico": 412,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-02T09:37:30.202Z",
          "valorTotal": 23208
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-16T21:30:41.492Z"
  },
  {
      "idhistorico": 413,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-21T08:21:42.833Z",
          "valorTotal": 235812
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-19T18:18:53.890Z"
  },
  {
      "idhistorico": 414,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-14T20:05:33.201Z",
          "valorTotal": 158496
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-12T07:26:26.740Z"
  },
  {
      "idhistorico": 415,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-02-05T21:34:04.316Z",
          "valorTotal": 44177
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-01T19:02:59.756Z"
  },
  {
      "idhistorico": 416,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-08-07T23:24:11.890Z",
          "valorTotal": 121031
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-14T12:46:48.907Z"
  },
  {
      "idhistorico": 417,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-08-04T17:45:01.412Z",
          "valorTotal": 101854
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-08T09:14:00.359Z"
  },
  {
      "idhistorico": 418,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-25T05:34:15.540Z",
          "valorTotal": 110154
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-13T06:17:48.976Z"
  },
  {
      "idhistorico": 419,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-13T10:06:36.267Z",
          "valorTotal": 173990
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-25T12:30:46.443Z"
  },
  {
      "idhistorico": 420,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-01T07:22:06.978Z",
          "valorTotal": 229112
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-10T00:26:11.132Z"
  },
  {
      "idhistorico": 421,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-19T08:17:40.169Z",
          "valorTotal": 64145
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-28T14:42:28.647Z"
  },
  {
      "idhistorico": 422,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-12T22:13:45.024Z",
          "valorTotal": 230999
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-14T06:09:59.426Z"
  },
  {
      "idhistorico": 423,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-21T07:31:28.289Z",
          "valorTotal": 68040
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-02T20:05:01.294Z"
  },
  {
      "idhistorico": 424,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-26T22:30:27.955Z",
          "valorTotal": 169380
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-27T03:47:17.203Z"
  },
  {
      "idhistorico": 425,
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
          "fechacreado": "2021-02-03T07:34:04.552Z",
          "valorTotal": 154803
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-16T17:19:40.119Z"
  },
  {
      "idhistorico": 426,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-07-16T09:56:42.375Z",
          "valorTotal": 232818
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-07T18:13:13.085Z"
  },
  {
      "idhistorico": 427,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-03T21:09:32.727Z",
          "valorTotal": 109857
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-02T22:15:57.717Z"
  },
  {
      "idhistorico": 428,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-17T14:51:48.254Z",
          "valorTotal": 22499
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-09T12:33:11.125Z"
  },
  {
      "idhistorico": 429,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-06-01T13:25:18.678Z",
          "valorTotal": 243908
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-28T17:50:16.464Z"
  },
  {
      "idhistorico": 430,
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
          "fechacreado": "2021-03-11T16:45:31.254Z",
          "valorTotal": 143928
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-17T18:06:03.461Z"
  },
  {
      "idhistorico": 431,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-26T10:20:41.364Z",
          "valorTotal": 166209
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-16T07:58:00.845Z"
  },
  {
      "idhistorico": 432,
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
          "fechacreado": "2021-06-14T21:44:45.712Z",
          "valorTotal": 167778
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T18:17:06.191Z"
  },
  {
      "idhistorico": 433,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-29T10:54:57.332Z",
          "valorTotal": 83431
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-15T11:19:16.983Z"
  },
  {
      "idhistorico": 434,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-03-27T16:56:04.543Z",
          "valorTotal": 117745
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-04T22:39:56.835Z"
  },
  {
      "idhistorico": 435,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-29T09:41:04.458Z",
          "valorTotal": 49905
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-11T12:51:19.715Z"
  },
  {
      "idhistorico": 436,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-06-09T17:06:11.135Z",
          "valorTotal": 161750
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-25T01:36:31.666Z"
  },
  {
      "idhistorico": 437,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-16T22:12:21.553Z",
          "valorTotal": 144370
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-10T08:36:41.636Z"
  },
  {
      "idhistorico": 438,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-08-11T03:43:42.541Z",
          "valorTotal": 134185
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-04T18:40:51.553Z"
  },
  {
      "idhistorico": 439,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-05-30T05:02:54.453Z",
          "valorTotal": 173226
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-05T21:51:57.998Z"
  },
  {
      "idhistorico": 440,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-19T06:45:21.048Z",
          "valorTotal": 150970
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-08T11:52:31.452Z"
  },
  {
      "idhistorico": 441,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-09T12:08:15.416Z",
          "valorTotal": 199876
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-23T15:37:01.648Z"
  },
  {
      "idhistorico": 442,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-01-26T09:22:17.606Z",
          "valorTotal": 242225
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-08T16:55:00.315Z"
  },
  {
      "idhistorico": 443,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-28T23:37:12.831Z",
          "valorTotal": 218425
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-03T11:24:57.860Z"
  },
  {
      "idhistorico": 444,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-03-31T01:37:32.128Z",
          "valorTotal": 105396
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-05T13:39:48.716Z"
  },
  {
      "idhistorico": 445,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-06T23:57:22.925Z",
          "valorTotal": 189542
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-16T13:36:11.734Z"
  },
  {
      "idhistorico": 446,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-06-17T14:22:13.161Z",
          "valorTotal": 135543
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-02T08:05:42.137Z"
  },
  {
      "idhistorico": 447,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-21T16:11:50.388Z",
          "valorTotal": 178605
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-08T21:06:02.946Z"
  },
  {
      "idhistorico": 448,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-23T16:36:02.709Z",
          "valorTotal": 197261
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-07T21:54:47.945Z"
  },
  {
      "idhistorico": 449,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-02T21:11:19.960Z",
          "valorTotal": 126480
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T19:09:41.303Z"
  },
  {
      "idhistorico": 450,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-26T09:54:32.050Z",
          "valorTotal": 129078
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-01T15:07:39.260Z"
  },
  {
      "idhistorico": 451,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-01T16:33:00.040Z",
          "valorTotal": 69720
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-11T19:05:00.034Z"
  },
  {
      "idhistorico": 452,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-09T14:15:20.482Z",
          "valorTotal": 75446
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-25T03:42:42.358Z"
  },
  {
      "idhistorico": 453,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-04-15T16:34:55.379Z",
          "valorTotal": 33287
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-18T11:07:31.474Z"
  },
  {
      "idhistorico": 454,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-10T18:03:40.548Z",
          "valorTotal": 194846
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-04T07:19:31.678Z"
  },
  {
      "idhistorico": 455,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-05-23T07:20:42.110Z",
          "valorTotal": 36143
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-16T06:16:50.826Z"
  },
  {
      "idhistorico": 456,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-01-05T21:20:54.078Z",
          "valorTotal": 139306
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-10T04:28:18.298Z"
  },
  {
      "idhistorico": 457,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-12T19:59:30.629Z",
          "valorTotal": 187967
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-31T13:11:42.873Z"
  },
  {
      "idhistorico": 458,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-14T09:56:53.381Z",
          "valorTotal": 179009
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-26T10:43:32.648Z"
  },
  {
      "idhistorico": 459,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-04T09:56:59.097Z",
          "valorTotal": 178532
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-07T17:12:52.174Z"
  },
  {
      "idhistorico": 460,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-24T23:54:44.020Z",
          "valorTotal": 240348
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-23T03:52:42.123Z"
  },
  {
      "idhistorico": 461,
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
          "fechacreado": "2021-07-04T13:20:18.275Z",
          "valorTotal": 224596
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-31T20:41:44.883Z"
  },
  {
      "idhistorico": 462,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-17T03:12:34.532Z",
          "valorTotal": 243873
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-30T14:19:14.615Z"
  },
  {
      "idhistorico": 463,
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
          "fechacreado": "2021-06-01T03:12:19.157Z",
          "valorTotal": 237934
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-01T09:53:09.192Z"
  },
  {
      "idhistorico": 464,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-17T08:26:28.308Z",
          "valorTotal": 128180
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-07T23:50:30.553Z"
  },
  {
      "idhistorico": 465,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-01-25T14:25:13.765Z",
          "valorTotal": 207365
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-26T21:17:01.822Z"
  },
  {
      "idhistorico": 466,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-15T20:37:16.929Z",
          "valorTotal": 116090
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-15T10:53:31.016Z"
  },
  {
      "idhistorico": 467,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-04-24T03:42:10.822Z",
          "valorTotal": 88498
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-04T10:56:18.995Z"
  },
  {
      "idhistorico": 468,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-08-10T17:20:34.907Z",
          "valorTotal": 70121
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-11T00:44:07.247Z"
  },
  {
      "idhistorico": 469,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-07T08:53:14.302Z",
          "valorTotal": 144432
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-20T00:18:26.631Z"
  },
  {
      "idhistorico": 470,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-03-31T04:55:11.366Z",
          "valorTotal": 119563
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-25T03:52:02.992Z"
  },
  {
      "idhistorico": 471,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-02-08T19:33:02.134Z",
          "valorTotal": 142285
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-23T13:55:40.950Z"
  },
  {
      "idhistorico": 472,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-29T13:12:05.870Z",
          "valorTotal": 215407
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-08T03:01:57.487Z"
  },
  {
      "idhistorico": 473,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-28T14:13:07.711Z",
          "valorTotal": 135605
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-01T13:24:08.740Z"
  },
  {
      "idhistorico": 474,
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
          "fechacreado": "2021-05-18T13:06:29.297Z",
          "valorTotal": 35907
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-15T08:33:41.879Z"
  },
  {
      "idhistorico": 475,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-11T02:28:54.944Z",
          "valorTotal": 44381
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-28T01:58:10.839Z"
  },
  {
      "idhistorico": 476,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-09T02:56:33.542Z",
          "valorTotal": 142699
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-13T23:08:11.886Z"
  },
  {
      "idhistorico": 477,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-02-05T11:42:04.294Z",
          "valorTotal": 153618
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-28T04:22:23.227Z"
  },
  {
      "idhistorico": 478,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-14T14:52:17.594Z",
          "valorTotal": 24753
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-07T06:09:45.037Z"
  },
  {
      "idhistorico": 479,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-19T01:54:19.477Z",
          "valorTotal": 25284
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-05T07:37:10.542Z"
  },
  {
      "idhistorico": 480,
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
          "fechacreado": "2021-02-26T01:47:45.052Z",
          "valorTotal": 241659
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-30T08:25:24.902Z"
  },
  {
      "idhistorico": 481,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-02-24T11:50:05.547Z",
          "valorTotal": 175959
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-22T14:48:08.598Z"
  },
  {
      "idhistorico": 482,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-18T17:54:03.858Z",
          "valorTotal": 54822
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-01T16:31:22.532Z"
  },
  {
      "idhistorico": 483,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-27T07:52:13.143Z",
          "valorTotal": 63171
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-10T14:23:53.230Z"
  },
  {
      "idhistorico": 484,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-19T07:01:19.486Z",
          "valorTotal": 138208
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-17T17:24:02.875Z"
  },
  {
      "idhistorico": 485,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-27T02:50:41.903Z",
          "valorTotal": 166896
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-31T22:09:45.331Z"
  },
  {
      "idhistorico": 486,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-25T15:24:22.998Z",
          "valorTotal": 51633
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-09T07:40:31.580Z"
  },
  {
      "idhistorico": 487,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-15T00:54:56.530Z",
          "valorTotal": 81631
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-02T08:48:19.899Z"
  },
  {
      "idhistorico": 488,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-26T17:37:10.965Z",
          "valorTotal": 83763
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-05T00:31:28.925Z"
  },
  {
      "idhistorico": 489,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-02-08T06:24:02.983Z",
          "valorTotal": 54225
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-21T16:50:37.104Z"
  },
  {
      "idhistorico": 490,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-02-09T20:12:31.229Z",
          "valorTotal": 96503
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-07T16:37:11.165Z"
  },
  {
      "idhistorico": 491,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-04-14T12:08:23.229Z",
          "valorTotal": 144561
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-18T10:11:05.457Z"
  },
  {
      "idhistorico": 492,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-02-28T09:50:41.487Z",
          "valorTotal": 153135
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-28T18:34:53.265Z"
  },
  {
      "idhistorico": 493,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-07-14T19:25:14.961Z",
          "valorTotal": 167021
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-28T17:44:10.986Z"
  },
  {
      "idhistorico": 494,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-13T23:48:48.841Z",
          "valorTotal": 24827
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-24T03:07:19.429Z"
  },
  {
      "idhistorico": 495,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-02-23T12:19:25.801Z",
          "valorTotal": 80038
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-24T20:36:51.605Z"
  },
  {
      "idhistorico": 496,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-06T14:25:57.507Z",
          "valorTotal": 207684
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-16T19:31:12.063Z"
  },
  {
      "idhistorico": 497,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-05-12T20:40:48.328Z",
          "valorTotal": 185391
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-06T00:20:30.624Z"
  },
  {
      "idhistorico": 498,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-05-06T08:48:10.933Z",
          "valorTotal": 171814
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-24T09:08:26.126Z"
  },
  {
      "idhistorico": 499,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-09T04:20:28.812Z",
          "valorTotal": 87051
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-12T08:55:24.879Z"
  },
  {
      "idhistorico": 500,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-03-03T09:10:51.597Z",
          "valorTotal": 86212
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-28T12:24:04.580Z"
  },
  {
      "idhistorico": 501,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-26T22:27:47.712Z",
          "valorTotal": 208593
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-10T05:37:23.998Z"
  },
  {
      "idhistorico": 502,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-16T23:42:49.063Z",
          "valorTotal": 222327
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-09T09:11:50.991Z"
  },
  {
      "idhistorico": 503,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-25T16:41:57.114Z",
          "valorTotal": 62738
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-01T07:01:46.395Z"
  },
  {
      "idhistorico": 504,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-12T10:47:07.093Z",
          "valorTotal": 80594
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-07T06:56:20.938Z"
  },
  {
      "idhistorico": 505,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-03-25T02:56:55.988Z",
          "valorTotal": 23022
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-31T14:03:56.655Z"
  },
  {
      "idhistorico": 506,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-29T18:36:03.047Z",
          "valorTotal": 209070
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T00:50:13.175Z"
  },
  {
      "idhistorico": 507,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-18T14:23:54.787Z",
          "valorTotal": 188661
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-31T13:46:32.986Z"
  },
  {
      "idhistorico": 508,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-05T05:24:20.889Z",
          "valorTotal": 224708
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-09T02:54:58.423Z"
  },
  {
      "idhistorico": 509,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-06-07T12:36:47.488Z",
          "valorTotal": 237489
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-25T11:51:19.644Z"
  },
  {
      "idhistorico": 510,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-15T11:47:54.997Z",
          "valorTotal": 38913
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-25T15:50:56.825Z"
  },
  {
      "idhistorico": 511,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-03-18T23:17:40.095Z",
          "valorTotal": 223729
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-14T05:41:50.024Z"
  },
  {
      "idhistorico": 512,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-15T16:30:35.196Z",
          "valorTotal": 96904
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T15:32:50.299Z"
  },
  {
      "idhistorico": 513,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-18T17:14:21.617Z",
          "valorTotal": 60450
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-26T04:24:26.303Z"
  },
  {
      "idhistorico": 514,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-09T05:03:15.201Z",
          "valorTotal": 246948
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-29T01:10:25.563Z"
  },
  {
      "idhistorico": 515,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-18T05:27:13.358Z",
          "valorTotal": 189543
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-28T06:51:11.039Z"
  },
  {
      "idhistorico": 516,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-01-05T22:09:22.872Z",
          "valorTotal": 150758
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-11T04:34:02.567Z"
  },
  {
      "idhistorico": 517,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-02T11:21:54.916Z",
          "valorTotal": 225720
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-16T22:57:11.777Z"
  },
  {
      "idhistorico": 518,
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
          "fechacreado": "2021-06-26T20:17:08.120Z",
          "valorTotal": 41768
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-02T03:20:10.749Z"
  },
  {
      "idhistorico": 519,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-05-17T08:43:54.622Z",
          "valorTotal": 121234
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-28T19:40:55.271Z"
  },
  {
      "idhistorico": 520,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-05-26T20:05:44.872Z",
          "valorTotal": 25289
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-10T01:59:01.127Z"
  },
  {
      "idhistorico": 521,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-23T22:37:26.441Z",
          "valorTotal": 226560
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-26T17:05:45.704Z"
  },
  {
      "idhistorico": 522,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-06-01T02:54:35.277Z",
          "valorTotal": 170946
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-01T18:21:47.818Z"
  },
  {
      "idhistorico": 523,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-18T19:57:19.494Z",
          "valorTotal": 236542
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-25T19:27:43.770Z"
  },
  {
      "idhistorico": 524,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-23T15:31:32.715Z",
          "valorTotal": 161942
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-07T11:24:55.101Z"
  },
  {
      "idhistorico": 525,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-06-13T08:02:08.217Z",
          "valorTotal": 248344
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-06T03:54:34.612Z"
  },
  {
      "idhistorico": 526,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-06-01T03:13:52.459Z",
          "valorTotal": 27645
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-08T21:28:26.854Z"
  },
  {
      "idhistorico": 527,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-07-02T15:10:15.714Z",
          "valorTotal": 194258
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-27T01:14:47.459Z"
  },
  {
      "idhistorico": 528,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-26T02:35:33.946Z",
          "valorTotal": 226456
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-23T15:52:44.748Z"
  },
  {
      "idhistorico": 529,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-06T16:41:39.100Z",
          "valorTotal": 113262
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-22T04:34:30.247Z"
  },
  {
      "idhistorico": 530,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-05-06T13:51:02.624Z",
          "valorTotal": 71125
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-28T10:13:25.027Z"
  },
  {
      "idhistorico": 531,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-08-04T12:57:47.548Z",
          "valorTotal": 170961
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-16T06:25:35.106Z"
  },
  {
      "idhistorico": 532,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-24T04:35:06.688Z",
          "valorTotal": 141627
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-25T19:08:31.748Z"
  },
  {
      "idhistorico": 533,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-18T06:43:53.323Z",
          "valorTotal": 241573
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-18T22:10:43.317Z"
  },
  {
      "idhistorico": 534,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-18T05:27:30.590Z",
          "valorTotal": 155501
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-21T10:12:41.950Z"
  },
  {
      "idhistorico": 535,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-03-06T21:58:31.709Z",
          "valorTotal": 246041
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-15T01:51:48.665Z"
  },
  {
      "idhistorico": 536,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-01-27T06:52:16.021Z",
          "valorTotal": 231754
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-28T02:26:55.881Z"
  },
  {
      "idhistorico": 537,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-04-18T20:06:40.338Z",
          "valorTotal": 116649
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-06T06:46:07.896Z"
  },
  {
      "idhistorico": 538,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-10T00:36:26.075Z",
          "valorTotal": 105082
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-17T01:32:27.931Z"
  },
  {
      "idhistorico": 539,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-16T03:58:26.437Z",
          "valorTotal": 221708
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-15T07:45:07.917Z"
  },
  {
      "idhistorico": 540,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-25T20:15:45.151Z",
          "valorTotal": 59317
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-27T00:37:58.827Z"
  },
  {
      "idhistorico": 541,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-11T16:00:24.327Z",
          "valorTotal": 82061
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-12T06:54:55.028Z"
  },
  {
      "idhistorico": 542,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-02-07T23:00:10.130Z",
          "valorTotal": 140913
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-08T18:15:05.282Z"
  },
  {
      "idhistorico": 543,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-01T15:52:03.426Z",
          "valorTotal": 116313
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-13T11:08:44.076Z"
  },
  {
      "idhistorico": 544,
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
          "fechacreado": "2021-04-30T01:39:13.210Z",
          "valorTotal": 212307
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-12T00:32:25.044Z"
  },
  {
      "idhistorico": 545,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-02T22:48:52.205Z",
          "valorTotal": 36151
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-23T19:43:57.930Z"
  },
  {
      "idhistorico": 546,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-09T18:52:51.611Z",
          "valorTotal": 209743
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-29T23:24:06.495Z"
  },
  {
      "idhistorico": 547,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-31T12:56:38.865Z",
          "valorTotal": 158221
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-16T00:09:38.091Z"
  },
  {
      "idhistorico": 548,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-06-23T17:00:02.283Z",
          "valorTotal": 168511
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-04T11:30:47.548Z"
  },
  {
      "idhistorico": 549,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-08T03:11:58.616Z",
          "valorTotal": 42969
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-16T08:20:12.709Z"
  },
  {
      "idhistorico": 550,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-03T23:42:25.249Z",
          "valorTotal": 90039
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-18T06:46:44.470Z"
  },
  {
      "idhistorico": 551,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-03T19:52:44.484Z",
          "valorTotal": 191887
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-10T04:47:02.217Z"
  },
  {
      "idhistorico": 552,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-09T14:53:45.843Z",
          "valorTotal": 63977
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-23T06:03:41.546Z"
  },
  {
      "idhistorico": 553,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-06T04:58:28.262Z",
          "valorTotal": 124486
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T03:56:27.494Z"
  },
  {
      "idhistorico": 554,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-14T16:37:38.549Z",
          "valorTotal": 81762
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-18T16:51:59.082Z"
  },
  {
      "idhistorico": 555,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-05-17T05:54:32.076Z",
          "valorTotal": 116667
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-09T11:18:35.625Z"
  },
  {
      "idhistorico": 556,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-09T09:56:32.262Z",
          "valorTotal": 74896
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-04T00:41:03.106Z"
  },
  {
      "idhistorico": 557,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-05-23T12:02:06.531Z",
          "valorTotal": 25653
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-13T17:33:50.443Z"
  },
  {
      "idhistorico": 558,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-05T23:01:39.393Z",
          "valorTotal": 144100
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-10T06:26:48.583Z"
  },
  {
      "idhistorico": 559,
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
          "fechacreado": "2021-06-25T16:58:05.042Z",
          "valorTotal": 36842
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-15T03:48:32.998Z"
  },
  {
      "idhistorico": 560,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-23T13:03:03.210Z",
          "valorTotal": 90781
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-23T19:57:08.555Z"
  },
  {
      "idhistorico": 561,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-30T19:57:19.682Z",
          "valorTotal": 96772
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-07T02:49:18.424Z"
  },
  {
      "idhistorico": 562,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-24T11:18:26.909Z",
          "valorTotal": 213230
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-22T03:14:17.655Z"
  },
  {
      "idhistorico": 563,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-08T22:30:27.532Z",
          "valorTotal": 208673
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-27T22:37:58.182Z"
  },
  {
      "idhistorico": 564,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-08T13:05:02.637Z",
          "valorTotal": 188795
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-15T04:38:04.937Z"
  },
  {
      "idhistorico": 565,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-22T15:05:14.884Z",
          "valorTotal": 84126
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T06:49:09.214Z"
  },
  {
      "idhistorico": 566,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-04-07T01:46:30.448Z",
          "valorTotal": 160431
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-04T12:31:05.834Z"
  },
  {
      "idhistorico": 567,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-07-12T04:56:49.173Z",
          "valorTotal": 180027
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-01T14:10:09.201Z"
  },
  {
      "idhistorico": 568,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-04T23:20:16.817Z",
          "valorTotal": 125547
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-20T10:36:36.412Z"
  },
  {
      "idhistorico": 569,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-06-12T22:23:32.598Z",
          "valorTotal": 151328
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-30T09:08:32.836Z"
  },
  {
      "idhistorico": 570,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-01-23T13:17:10.841Z",
          "valorTotal": 242523
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-24T23:34:53.024Z"
  },
  {
      "idhistorico": 571,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-25T09:50:05.961Z",
          "valorTotal": 20070
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-21T18:09:12.947Z"
  },
  {
      "idhistorico": 572,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-28T06:41:17.824Z",
          "valorTotal": 49347
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-20T02:52:55.539Z"
  },
  {
      "idhistorico": 573,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-20T11:01:24.018Z",
          "valorTotal": 209523
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-07T06:19:06.920Z"
  },
  {
      "idhistorico": 574,
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
          "fechacreado": "2021-03-05T21:22:18.673Z",
          "valorTotal": 215417
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-04T16:13:54.670Z"
  },
  {
      "idhistorico": 575,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-06T07:47:33.850Z",
          "valorTotal": 38413
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-09T22:52:23.051Z"
  },
  {
      "idhistorico": 576,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-09T14:19:27.355Z",
          "valorTotal": 131158
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-26T16:15:12.478Z"
  },
  {
      "idhistorico": 577,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-29T05:13:33.976Z",
          "valorTotal": 109152
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T09:48:48.271Z"
  },
  {
      "idhistorico": 578,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-21T07:24:59.070Z",
          "valorTotal": 156404
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-29T07:01:58.040Z"
  },
  {
      "idhistorico": 579,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-02-13T21:18:48.606Z",
          "valorTotal": 188588
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-11T15:04:46.247Z"
  },
  {
      "idhistorico": 580,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-27T13:49:40.728Z",
          "valorTotal": 45987
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-21T18:27:52.285Z"
  },
  {
      "idhistorico": 581,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-20T23:02:39.257Z",
          "valorTotal": 248157
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-15T16:24:08.854Z"
  },
  {
      "idhistorico": 582,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-05T17:27:32.515Z",
          "valorTotal": 185995
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-26T18:59:11.039Z"
  },
  {
      "idhistorico": 583,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-17T20:54:38.507Z",
          "valorTotal": 68753
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-04T19:57:44.438Z"
  },
  {
      "idhistorico": 584,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-07T03:03:05.740Z",
          "valorTotal": 239585
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-12T13:07:29.442Z"
  },
  {
      "idhistorico": 585,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-02T03:19:12.341Z",
          "valorTotal": 84398
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-11T07:32:28.658Z"
  },
  {
      "idhistorico": 586,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-12T09:30:16.231Z",
          "valorTotal": 106948
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-22T20:01:05.776Z"
  },
  {
      "idhistorico": 587,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-04T23:35:40.443Z",
          "valorTotal": 101530
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-04T17:04:09.884Z"
  },
  {
      "idhistorico": 588,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-24T00:21:27.007Z",
          "valorTotal": 161371
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-13T20:42:40.978Z"
  },
  {
      "idhistorico": 589,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-26T12:46:22.259Z",
          "valorTotal": 37076
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-26T01:55:09.315Z"
  },
  {
      "idhistorico": 590,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-16T00:21:29.821Z",
          "valorTotal": 152873
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-06T00:11:32.913Z"
  },
  {
      "idhistorico": 591,
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
          "fechacreado": "2021-03-09T20:00:17.744Z",
          "valorTotal": 169850
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-09T09:55:56.439Z"
  },
  {
      "idhistorico": 592,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-13T06:36:30.441Z",
          "valorTotal": 145065
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T00:34:37.608Z"
  },
  {
      "idhistorico": 593,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-10T06:57:34.486Z",
          "valorTotal": 177285
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-20T23:19:46.903Z"
  },
  {
      "idhistorico": 594,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-24T22:36:53.612Z",
          "valorTotal": 209338
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-27T14:44:54.552Z"
  },
  {
      "idhistorico": 595,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-10T05:20:51.216Z",
          "valorTotal": 94645
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-20T22:40:36.362Z"
  },
  {
      "idhistorico": 596,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-11T01:15:38.639Z",
          "valorTotal": 209187
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-13T15:59:14.770Z"
  },
  {
      "idhistorico": 597,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-09T02:40:44.000Z",
          "valorTotal": 134360
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-29T06:40:37.024Z"
  },
  {
      "idhistorico": 598,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-02T11:44:16.383Z",
          "valorTotal": 217112
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-27T04:18:13.610Z"
  },
  {
      "idhistorico": 599,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-26T04:04:38.216Z",
          "valorTotal": 138300
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-01T19:17:24.702Z"
  },
  {
      "idhistorico": 600,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-24T18:22:56.237Z",
          "valorTotal": 178419
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-24T17:49:48.852Z"
  },
  {
      "idhistorico": 601,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-03T14:49:09.463Z",
          "valorTotal": 85932
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-11T02:57:06.815Z"
  },
  {
      "idhistorico": 602,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-10T11:27:34.227Z",
          "valorTotal": 126768
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-04T00:41:47.189Z"
  },
  {
      "idhistorico": 603,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-24T13:01:30.940Z",
          "valorTotal": 136408
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-08T12:48:06.008Z"
  },
  {
      "idhistorico": 604,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-04-29T21:52:59.725Z",
          "valorTotal": 191230
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T07:02:52.431Z"
  },
  {
      "idhistorico": 605,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-25T11:16:06.441Z",
          "valorTotal": 57644
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-23T02:26:36.630Z"
  },
  {
      "idhistorico": 606,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-29T18:54:16.500Z",
          "valorTotal": 75498
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-04T22:09:37.282Z"
  },
  {
      "idhistorico": 607,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-03-18T16:48:51.765Z",
          "valorTotal": 99047
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-29T01:14:32.197Z"
  },
  {
      "idhistorico": 608,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-02-22T04:00:32.367Z",
          "valorTotal": 222580
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-27T11:43:49.831Z"
  },
  {
      "idhistorico": 609,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-16T03:07:02.140Z",
          "valorTotal": 59856
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-10T00:34:56.490Z"
  },
  {
      "idhistorico": 610,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-30T17:39:38.038Z",
          "valorTotal": 166041
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-26T16:32:28.700Z"
  },
  {
      "idhistorico": 611,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-12T14:05:58.764Z",
          "valorTotal": 209212
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-21T10:08:51.301Z"
  },
  {
      "idhistorico": 612,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-06T18:58:42.315Z",
          "valorTotal": 154033
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-28T10:58:26.470Z"
  },
  {
      "idhistorico": 613,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-09T17:28:00.700Z",
          "valorTotal": 222243
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-19T12:54:47.474Z"
  },
  {
      "idhistorico": 614,
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
          "fechacreado": "2021-03-22T03:24:43.858Z",
          "valorTotal": 98824
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-12T05:20:20.742Z"
  },
  {
      "idhistorico": 615,
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
          "fechacreado": "2021-06-24T19:01:40.584Z",
          "valorTotal": 173536
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-31T21:46:53.802Z"
  },
  {
      "idhistorico": 616,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-17T14:55:17.898Z",
          "valorTotal": 35136
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-12T05:14:06.471Z"
  },
  {
      "idhistorico": 617,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-31T22:30:28.604Z",
          "valorTotal": 123433
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-16T18:52:51.969Z"
  },
  {
      "idhistorico": 618,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-13T18:33:35.312Z",
          "valorTotal": 139286
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-10T23:33:21.989Z"
  },
  {
      "idhistorico": 619,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-04-27T18:22:04.458Z",
          "valorTotal": 226299
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-01T13:26:52.165Z"
  },
  {
      "idhistorico": 620,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-08-06T18:47:33.832Z",
          "valorTotal": 176938
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-06T21:10:54.851Z"
  },
  {
      "idhistorico": 621,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-06-06T11:43:39.701Z",
          "valorTotal": 209062
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-05T06:52:54.916Z"
  },
  {
      "idhistorico": 622,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-03-24T04:59:21.521Z",
          "valorTotal": 113301
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-14T01:18:32.855Z"
  },
  {
      "idhistorico": 623,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-11T09:59:31.792Z",
          "valorTotal": 163867
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-10T14:58:57.446Z"
  },
  {
      "idhistorico": 624,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-25T11:05:25.029Z",
          "valorTotal": 20802
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-11T06:39:52.117Z"
  },
  {
      "idhistorico": 625,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-06-06T09:58:30.759Z",
          "valorTotal": 75605
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-16T08:57:33.778Z"
  },
  {
      "idhistorico": 626,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-11T07:09:14.231Z",
          "valorTotal": 124517
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-05T14:09:33.220Z"
  },
  {
      "idhistorico": 627,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-01T10:25:14.092Z",
          "valorTotal": 49238
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-10T08:59:22.696Z"
  },
  {
      "idhistorico": 628,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-05-27T04:56:03.539Z",
          "valorTotal": 167613
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-03T13:08:15.546Z"
  },
  {
      "idhistorico": 629,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-26T01:57:34.796Z",
          "valorTotal": 181248
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-16T13:54:56.660Z"
  },
  {
      "idhistorico": 630,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-05T11:23:30.547Z",
          "valorTotal": 132176
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-10T03:33:47.528Z"
  },
  {
      "idhistorico": 631,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-07-01T02:07:32.729Z",
          "valorTotal": 168204
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-11T06:49:40.967Z"
  },
  {
      "idhistorico": 632,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-03T01:18:02.480Z",
          "valorTotal": 201383
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-17T00:01:34.543Z"
  },
  {
      "idhistorico": 633,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "83",
              "name": "Colsubdidio"
          },
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-02-02T00:01:14.035Z",
          "valorTotal": 88992
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-26T17:23:56.430Z"
  },
  {
      "idhistorico": 634,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-03T04:30:12.028Z",
          "valorTotal": 170366
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-02T01:05:46.867Z"
  },
  {
      "idhistorico": 635,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-08-08T20:54:18.378Z",
          "valorTotal": 118034
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-06T19:10:35.468Z"
  },
  {
      "idhistorico": 636,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-26T04:11:05.770Z",
          "valorTotal": 79571
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-05T16:37:21.694Z"
  },
  {
      "idhistorico": 637,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-02-25T19:46:47.269Z",
          "valorTotal": 223671
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-27T18:05:01.772Z"
  },
  {
      "idhistorico": 638,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-07T11:56:50.494Z",
          "valorTotal": 62526
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-31T13:39:56.908Z"
  },
  {
      "idhistorico": 639,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-19T16:06:36.454Z",
          "valorTotal": 40651
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-25T04:36:51.883Z"
  },
  {
      "idhistorico": 640,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-06-16T21:46:35.740Z",
          "valorTotal": 100604
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-03T00:54:21.537Z"
  },
  {
      "idhistorico": 641,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-29T15:34:54.385Z",
          "valorTotal": 216259
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-17T16:21:37.972Z"
  },
  {
      "idhistorico": 642,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-19T11:35:55.413Z",
          "valorTotal": 33528
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-18T00:06:53.869Z"
  },
  {
      "idhistorico": 643,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-30T18:30:57.901Z",
          "valorTotal": 35663
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-22T21:21:45.514Z"
  },
  {
      "idhistorico": 644,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-03-04T05:28:13.291Z",
          "valorTotal": 55323
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-09T04:29:57.192Z"
  },
  {
      "idhistorico": 645,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
          "cliente": {
              "cedula": "80073726",
              "name": "PISPIRETA"
          },
          "seller": {
              "id": "84",
              "name": "Drogas para ti"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-04-04T21:13:16.552Z",
          "valorTotal": 206143
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T23:01:51.097Z"
  },
  {
      "idhistorico": 646,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-01-09T22:51:13.041Z",
          "valorTotal": 48564
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T12:44:57.698Z"
  },
  {
      "idhistorico": 647,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-13T19:16:35.889Z",
          "valorTotal": 55313
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-22T05:36:00.489Z"
  },
  {
      "idhistorico": 648,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-04-17T17:39:12.638Z",
          "valorTotal": 166423
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-03T17:09:13.863Z"
  },
  {
      "idhistorico": 649,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-22T17:25:07.400Z",
          "valorTotal": 130935
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-08T22:15:21.629Z"
  },
  {
      "idhistorico": 650,
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
          "totalProductos": 1,
          "fechacreado": "2021-08-11T14:05:19.568Z",
          "valorTotal": 217039
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-23T01:37:06.247Z"
  },
  {
      "idhistorico": 651,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-23T09:00:49.338Z",
          "valorTotal": 215679
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-06T17:34:13.247Z"
  },
  {
      "idhistorico": 652,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-03T14:25:26.859Z",
          "valorTotal": 79429
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-13T10:38:34.580Z"
  },
  {
      "idhistorico": 653,
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
          "totalProductos": 1,
          "fechacreado": "2021-08-08T23:31:16.692Z",
          "valorTotal": 126459
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-23T09:01:14.653Z"
  },
  {
      "idhistorico": 654,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-02-03T21:18:14.409Z",
          "valorTotal": 95440
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-26T09:34:26.648Z"
  },
  {
      "idhistorico": 655,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-07-11T02:01:01.841Z",
          "valorTotal": 65548
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-30T18:12:29.272Z"
  },
  {
      "idhistorico": 656,
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
          "fechacreado": "2021-03-05T08:17:29.395Z",
          "valorTotal": 117323
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-18T14:00:40.202Z"
  },
  {
      "idhistorico": 657,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-24T19:01:30.380Z",
          "valorTotal": 133743
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-29T07:10:52.009Z"
  },
  {
      "idhistorico": 658,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-01-31T15:52:14.286Z",
          "valorTotal": 186626
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-01T16:40:43.730Z"
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
          "totalProductos": 3,
          "fechacreado": "2021-03-15T16:56:27.919Z",
          "valorTotal": 24241
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-08T06:56:10.429Z"
  },
  {
      "idhistorico": 660,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-08-05T01:40:45.625Z",
          "valorTotal": 154044
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-01T12:06:33.703Z"
  },
  {
      "idhistorico": 661,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-12T07:28:47.231Z",
          "valorTotal": 167289
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-11T01:19:05.236Z"
  },
  {
      "idhistorico": 662,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-18T22:54:40.432Z",
          "valorTotal": 207464
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-12T13:50:47.144Z"
  },
  {
      "idhistorico": 663,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-22T01:46:34.617Z",
          "valorTotal": 238204
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-14T17:12:26.772Z"
  },
  {
      "idhistorico": 664,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-02-26T03:04:06.119Z",
          "valorTotal": 101650
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-26T01:19:07.098Z"
  },
  {
      "idhistorico": 665,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-07-02T23:25:40.529Z",
          "valorTotal": 131809
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-28T17:42:16.876Z"
  },
  {
      "idhistorico": 666,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-24T14:25:37.443Z",
          "valorTotal": 139089
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-03T12:15:28.180Z"
  },
  {
      "idhistorico": 667,
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
          "fechacreado": "2021-01-02T11:14:32.813Z",
          "valorTotal": 26407
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-20T13:59:30.371Z"
  },
  {
      "idhistorico": 668,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 4,
          "fechacreado": "2021-08-02T11:49:59.049Z",
          "valorTotal": 76968
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-25T09:19:27.453Z"
  },
  {
      "idhistorico": 669,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-13T08:06:43.767Z",
          "valorTotal": 200670
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-30T08:20:16.809Z"
  },
  {
      "idhistorico": 670,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-05-09T17:05:07.815Z",
          "valorTotal": 183120
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-25T03:01:32.265Z"
  },
  {
      "idhistorico": 671,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-30T18:04:35.226Z",
          "valorTotal": 170328
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-28T20:16:34.448Z"
  },
  {
      "idhistorico": 672,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-06-02T20:45:08.658Z",
          "valorTotal": 218099
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-03T00:54:00.555Z"
  },
  {
      "idhistorico": 673,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-02T04:43:28.013Z",
          "valorTotal": 80530
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-05T13:31:09.781Z"
  },
  {
      "idhistorico": 674,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-14T04:57:02.401Z",
          "valorTotal": 210768
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-04T00:47:26.672Z"
  },
  {
      "idhistorico": 675,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-01-07T23:40:40.620Z",
          "valorTotal": 37942
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-07T07:15:14.885Z"
  },
  {
      "idhistorico": 676,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-08-04T11:34:45.462Z",
          "valorTotal": 140595
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-24T11:23:47.686Z"
  },
  {
      "idhistorico": 677,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-01-22T23:40:16.500Z",
          "valorTotal": 212242
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-15T14:15:31.665Z"
  },
  {
      "idhistorico": 678,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-09T20:55:06.047Z",
          "valorTotal": 183606
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-07T20:42:44.343Z"
  },
  {
      "idhistorico": 679,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-08-06T10:31:01.156Z",
          "valorTotal": 60621
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-16T16:48:09.546Z"
  },
  {
      "idhistorico": 680,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-17T18:03:46.184Z",
          "valorTotal": 48219
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T13:56:21.877Z"
  },
  {
      "idhistorico": 681,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-31T18:50:13.566Z",
          "valorTotal": 60602
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-27T02:50:54.786Z"
  },
  {
      "idhistorico": 682,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-10T22:36:32.245Z",
          "valorTotal": 157349
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-09T02:33:45.767Z"
  },
  {
      "idhistorico": 683,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-14T01:51:35.353Z",
          "valorTotal": 198055
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-27T12:22:30.856Z"
  },
  {
      "idhistorico": 684,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-16T22:49:13.038Z",
          "valorTotal": 105813
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-27T05:46:53.504Z"
  },
  {
      "idhistorico": 685,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-12T23:48:57.881Z",
          "valorTotal": 57956
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-24T00:21:18.558Z"
  },
  {
      "idhistorico": 686,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-17T04:22:23.603Z",
          "valorTotal": 75522
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T14:17:29.960Z"
  },
  {
      "idhistorico": 687,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-06-30T14:32:09.044Z",
          "valorTotal": 240068
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-03T01:30:23.937Z"
  },
  {
      "idhistorico": 688,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-05T02:04:51.912Z",
          "valorTotal": 115472
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-22T04:19:45.376Z"
  },
  {
      "idhistorico": 689,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-21T20:41:02.441Z",
          "valorTotal": 212461
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-16T00:36:33.925Z"
  },
  {
      "idhistorico": 690,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-15T17:02:28.902Z",
          "valorTotal": 56438
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-01T08:20:58.651Z"
  },
  {
      "idhistorico": 691,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-08-09T04:15:09.205Z",
          "valorTotal": 210231
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-16T22:50:47.200Z"
  },
  {
      "idhistorico": 692,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-03-05T08:39:57.785Z",
          "valorTotal": 218368
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-08T15:32:49.282Z"
  },
  {
      "idhistorico": 693,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-26T03:54:14.697Z",
          "valorTotal": 43726
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-19T14:06:44.514Z"
  },
  {
      "idhistorico": 694,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-27T21:47:09.406Z",
          "valorTotal": 26818
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-29T12:39:41.309Z"
  },
  {
      "idhistorico": 695,
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
          "fechacreado": "2021-01-31T04:59:02.900Z",
          "valorTotal": 32072
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-01T08:30:53.843Z"
  },
  {
      "idhistorico": 696,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-26T03:49:01.637Z",
          "valorTotal": 140283
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-05T01:15:27.071Z"
  },
  {
      "idhistorico": 697,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-30T05:39:32.105Z",
          "valorTotal": 204858
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-11T23:09:43.056Z"
  },
  {
      "idhistorico": 698,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-18T04:19:49.430Z",
          "valorTotal": 109059
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-01T20:15:10.748Z"
  },
  {
      "idhistorico": 699,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-07-27T23:28:32.443Z",
          "valorTotal": 199365
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T06:33:51.200Z"
  },
  {
      "idhistorico": 700,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 1,
          "fechacreado": "2021-03-15T10:51:58.251Z",
          "valorTotal": 31663
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-22T18:01:09.964Z"
  },
  {
      "idhistorico": 701,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-06-17T23:25:14.176Z",
          "valorTotal": 92758
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-07T09:39:09.104Z"
  },
  {
      "idhistorico": 702,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-01-13T12:36:01.596Z",
          "valorTotal": 230698
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-23T09:19:13.576Z"
  },
  {
      "idhistorico": 703,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-12T21:34:25.637Z",
          "valorTotal": 160129
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-06T01:52:27.286Z"
  },
  {
      "idhistorico": 704,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-13T03:52:17.856Z",
          "valorTotal": 107667
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-20T08:56:31.111Z"
  },
  {
      "idhistorico": 705,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-26T05:12:16.727Z",
          "valorTotal": 109630
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-06T06:40:46.166Z"
  },
  {
      "idhistorico": 706,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-27T12:03:49.234Z",
          "valorTotal": 212013
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-23T10:18:28.255Z"
  },
  {
      "idhistorico": 707,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-04-14T10:36:33.268Z",
          "valorTotal": 72075
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-13T03:54:47.828Z"
  },
  {
      "idhistorico": 708,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-23T03:03:18.761Z",
          "valorTotal": 113124
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-12T14:21:24.871Z"
  },
  {
      "idhistorico": 709,
      "devolucion": {
          "iddevolucion": 7,
          "orderformid": "8090-102",
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
          "fechacreado": "2021-05-27T21:06:06.517Z",
          "valorTotal": 202743
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-20T05:44:07.723Z"
  },
  {
      "idhistorico": 710,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-13T05:46:51.156Z",
          "valorTotal": 157387
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-23T02:20:32.475Z"
  },
  {
      "idhistorico": 711,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-01-12T02:08:15.745Z",
          "valorTotal": 239326
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T18:02:46.842Z"
  },
  {
      "idhistorico": 712,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-21T12:59:50.394Z",
          "valorTotal": 132894
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-29T00:06:22.786Z"
  },
  {
      "idhistorico": 713,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-25T08:59:41.829Z",
          "valorTotal": 30515
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-07T06:03:35.190Z"
  },
  {
      "idhistorico": 714,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-07-11T23:18:39.300Z",
          "valorTotal": 79804
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-05T00:28:24.068Z"
  },
  {
      "idhistorico": 715,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-06-13T05:38:58.894Z",
          "valorTotal": 162878
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-31T03:39:18.372Z"
  },
  {
      "idhistorico": 716,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-04-22T13:43:23.584Z",
          "valorTotal": 126413
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-13T00:44:36.029Z"
  },
  {
      "idhistorico": 717,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-05-09T12:41:27.692Z",
          "valorTotal": 65807
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-30T11:08:52.220Z"
  },
  {
      "idhistorico": 718,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-01-15T13:35:41.459Z",
          "valorTotal": 103053
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-11T17:13:48.712Z"
  },
  {
      "idhistorico": 719,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-28T04:44:19.973Z",
          "valorTotal": 171781
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T03:53:26.425Z"
  },
  {
      "idhistorico": 720,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-06-30T14:33:30.400Z",
          "valorTotal": 144285
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-04T08:35:09.951Z"
  },
  {
      "idhistorico": 721,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-04T06:15:00.411Z",
          "valorTotal": 225920
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T15:58:23.075Z"
  },
  {
      "idhistorico": 722,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-02-02T04:50:08.946Z",
          "valorTotal": 123011
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-11T11:59:30.336Z"
  },
  {
      "idhistorico": 723,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-01-20T20:31:01.615Z",
          "valorTotal": 157777
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-25T00:33:17.472Z"
  },
  {
      "idhistorico": 724,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-24T05:34:55.229Z",
          "valorTotal": 83116
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-22T23:57:33.802Z"
  },
  {
      "idhistorico": 725,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-29T08:24:05.058Z",
          "valorTotal": 187306
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-12T14:42:06.290Z"
  },
  {
      "idhistorico": 726,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-04-03T14:16:20.192Z",
          "valorTotal": 76601
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-12T16:55:32.672Z"
  },
  {
      "idhistorico": 727,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-07-19T06:15:00.540Z",
          "valorTotal": 186644
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-04T05:52:30.222Z"
  },
  {
      "idhistorico": 728,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-31T02:25:23.656Z",
          "valorTotal": 141129
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-04T16:53:32.559Z"
  },
  {
      "idhistorico": 729,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-14T02:22:08.378Z",
          "valorTotal": 121037
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-20T03:20:44.425Z"
  },
  {
      "idhistorico": 730,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-03-20T02:28:23.945Z",
          "valorTotal": 67313
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-14T15:47:45.609Z"
  },
  {
      "idhistorico": 731,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-02T06:48:52.573Z",
          "valorTotal": 129834
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-10T02:18:44.407Z"
  },
  {
      "idhistorico": 732,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-03-19T23:57:32.783Z",
          "valorTotal": 59792
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T13:43:01.468Z"
  },
  {
      "idhistorico": 733,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-08-11T11:51:55.561Z",
          "valorTotal": 240777
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-14T23:06:29.412Z"
  },
  {
      "idhistorico": 734,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-19T16:26:59.565Z",
          "valorTotal": 147727
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-23T20:46:18.025Z"
  },
  {
      "idhistorico": 735,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-02-01T14:29:05.161Z",
          "valorTotal": 184318
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-10T00:41:24.375Z"
  },
  {
      "idhistorico": 736,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-04T05:19:53.324Z",
          "valorTotal": 77296
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-03T04:58:36.244Z"
  },
  {
      "idhistorico": 737,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-06T00:45:11.689Z",
          "valorTotal": 75347
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T11:30:48.684Z"
  },
  {
      "idhistorico": 738,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-04-22T18:46:43.295Z",
          "valorTotal": 186797
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-10T15:07:58.359Z"
  },
  {
      "idhistorico": 739,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-07-19T05:32:49.436Z",
          "valorTotal": 183190
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-31T10:46:31.755Z"
  },
  {
      "idhistorico": 740,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-06-30T19:21:43.980Z",
          "valorTotal": 232514
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-13T20:51:15.942Z"
  },
  {
      "idhistorico": 741,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-06-28T10:05:06.252Z",
          "valorTotal": 70580
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-23T23:10:26.714Z"
  },
  {
      "idhistorico": 742,
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
          "fechacreado": "2021-04-05T10:30:36.296Z",
          "valorTotal": 171206
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-03T15:21:40.680Z"
  },
  {
      "idhistorico": 743,
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
          "fechacreado": "2021-01-23T16:04:20.719Z",
          "valorTotal": 214015
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-08T19:13:27.491Z"
  },
  {
      "idhistorico": 744,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-13T18:23:56.490Z",
          "valorTotal": 247920
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-01T13:57:13.261Z"
  },
  {
      "idhistorico": 745,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-07T16:00:33.168Z",
          "valorTotal": 30924
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-29T22:53:37.241Z"
  },
  {
      "idhistorico": 746,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-04-11T15:11:42.251Z",
          "valorTotal": 77534
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-12T07:14:32.534Z"
  },
  {
      "idhistorico": 747,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-20T01:22:34.411Z",
          "valorTotal": 145734
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-10T16:44:33.793Z"
  },
  {
      "idhistorico": 748,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-02T23:43:00.134Z",
          "valorTotal": 84516
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-26T13:37:54.126Z"
  },
  {
      "idhistorico": 749,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-02-02T14:26:32.546Z",
          "valorTotal": 221342
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-01T15:04:45.596Z"
  },
  {
      "idhistorico": 750,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-27T15:49:28.791Z",
          "valorTotal": 41506
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-10T21:07:11.718Z"
  },
  {
      "idhistorico": 751,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-03-31T10:35:07.649Z",
          "valorTotal": 149276
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-06T00:47:56.700Z"
  },
  {
      "idhistorico": 752,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-04T18:57:09.415Z",
          "valorTotal": 174718
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-17T15:40:22.010Z"
  },
  {
      "idhistorico": 753,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-04-23T19:10:04.288Z",
          "valorTotal": 107882
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-27T07:16:08.570Z"
  },
  {
      "idhistorico": 754,
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
          "totalProductos": 1,
          "fechacreado": "2021-04-07T11:52:03.575Z",
          "valorTotal": 158035
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-27T20:00:30.850Z"
  },
  {
      "idhistorico": 755,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-24T03:38:23.681Z",
          "valorTotal": 142088
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-11T12:30:05.652Z"
  },
  {
      "idhistorico": 756,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-12T11:40:44.899Z",
          "valorTotal": 247045
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-13T05:52:48.619Z"
  },
  {
      "idhistorico": 757,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-03-11T17:33:17.689Z",
          "valorTotal": 190409
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-28T14:24:10.296Z"
  },
  {
      "idhistorico": 758,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-22T10:05:51.515Z",
          "valorTotal": 108256
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-19T08:01:26.062Z"
  },
  {
      "idhistorico": 759,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-04-04T03:58:42.073Z",
          "valorTotal": 157887
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-04T04:16:22.387Z"
  },
  {
      "idhistorico": 760,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-03-24T12:03:05.582Z",
          "valorTotal": 189118
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-08T08:17:52.549Z"
  },
  {
      "idhistorico": 761,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-19T10:02:40.610Z",
          "valorTotal": 104291
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-30T04:51:29.286Z"
  },
  {
      "idhistorico": 762,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-12T15:48:39.788Z",
          "valorTotal": 239117
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-15T19:48:47.582Z"
  },
  {
      "idhistorico": 763,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-18T11:47:29.478Z",
          "valorTotal": 25110
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-05T12:59:16.004Z"
  },
  {
      "idhistorico": 764,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-22T13:43:55.945Z",
          "valorTotal": 218156
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-27T08:09:12.392Z"
  },
  {
      "idhistorico": 765,
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
          "totalProductos": 2,
          "fechacreado": "2021-01-27T21:50:26.783Z",
          "valorTotal": 169213
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-26T10:45:11.304Z"
  },
  {
      "idhistorico": 766,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-09T22:32:40.228Z",
          "valorTotal": 217115
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-12T17:59:31.902Z"
  },
  {
      "idhistorico": 767,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-01T12:05:59.046Z",
          "valorTotal": 198620
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-04T23:24:35.252Z"
  },
  {
      "idhistorico": 768,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-04T08:11:33.198Z",
          "valorTotal": 56721
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-21T23:17:32.678Z"
  },
  {
      "idhistorico": 769,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-02-21T04:57:07.531Z",
          "valorTotal": 154754
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T21:56:10.317Z"
  },
  {
      "idhistorico": 770,
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
          "fechacreado": "2021-04-25T02:03:33.508Z",
          "valorTotal": 174990
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-20T06:13:43.184Z"
  },
  {
      "idhistorico": 771,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-10T07:28:43.247Z",
          "valorTotal": 105766
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-23T05:09:06.582Z"
  },
  {
      "idhistorico": 772,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-19T12:24:22.749Z",
          "valorTotal": 177130
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-20T09:46:51.165Z"
  },
  {
      "idhistorico": 773,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-30T15:44:04.186Z",
          "valorTotal": 58380
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-18T10:00:33.978Z"
  },
  {
      "idhistorico": 774,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-07-10T08:14:37.111Z",
          "valorTotal": 119066
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-01T15:59:08.900Z"
  },
  {
      "idhistorico": 775,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-06-22T03:04:51.931Z",
          "valorTotal": 103040
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-23T04:57:11.643Z"
  },
  {
      "idhistorico": 776,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-18T01:49:55.177Z",
          "valorTotal": 208060
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-11T20:59:57.864Z"
  },
  {
      "idhistorico": 777,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-01T11:41:24.562Z",
          "valorTotal": 39078
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-16T03:00:56.901Z"
  },
  {
      "idhistorico": 778,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-30T05:31:06.667Z",
          "valorTotal": 229048
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-03T18:59:39.555Z"
  },
  {
      "idhistorico": 779,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-09T14:05:32.406Z",
          "valorTotal": 188050
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-27T07:44:02.323Z"
  },
  {
      "idhistorico": 780,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-27T21:16:14.969Z",
          "valorTotal": 200019
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-18T01:06:00.640Z"
  },
  {
      "idhistorico": 781,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-10T15:35:00.753Z",
          "valorTotal": 209138
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-26T07:36:06.331Z"
  },
  {
      "idhistorico": 782,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-06T09:10:22.431Z",
          "valorTotal": 244560
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-12T11:32:43.065Z"
  },
  {
      "idhistorico": 783,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-06-01T14:06:51.075Z",
          "valorTotal": 172593
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-14T20:54:24.824Z"
  },
  {
      "idhistorico": 784,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-03-26T09:17:43.239Z",
          "valorTotal": 157309
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-25T12:02:01.012Z"
  },
  {
      "idhistorico": 785,
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
          "fechacreado": "2021-05-02T00:41:49.639Z",
          "valorTotal": 101056
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-02T05:08:47.302Z"
  },
  {
      "idhistorico": 786,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-01T16:34:59.702Z",
          "valorTotal": 121924
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-23T03:45:43.599Z"
  },
  {
      "idhistorico": 787,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-01-09T02:22:19.005Z",
          "valorTotal": 68923
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-30T04:32:19.277Z"
  },
  {
      "idhistorico": 788,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-10T09:03:39.614Z",
          "valorTotal": 84816
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-04T16:43:51.573Z"
  },
  {
      "idhistorico": 789,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-07-28T04:17:03.016Z",
          "valorTotal": 163117
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-17T07:32:51.295Z"
  },
  {
      "idhistorico": 790,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-04-12T14:16:32.328Z",
          "valorTotal": 214116
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-09T13:35:09.617Z"
  },
  {
      "idhistorico": 791,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-04-30T12:46:31.305Z",
          "valorTotal": 191783
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-13T09:38:59.498Z"
  },
  {
      "idhistorico": 792,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-03-07T14:43:37.604Z",
          "valorTotal": 48174
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-20T09:02:22.626Z"
  },
  {
      "idhistorico": 793,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-19T15:15:33.090Z",
          "valorTotal": 21988
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-01T11:25:07.982Z"
  },
  {
      "idhistorico": 794,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-15T17:33:15.137Z",
          "valorTotal": 143657
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-12T18:11:32.534Z"
  },
  {
      "idhistorico": 795,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-01-02T02:54:42.358Z",
          "valorTotal": 129259
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-25T16:38:05.242Z"
  },
  {
      "idhistorico": 796,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-06-09T05:11:04.355Z",
          "valorTotal": 192473
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-04T04:23:46.748Z"
  },
  {
      "idhistorico": 797,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-22T03:38:05.352Z",
          "valorTotal": 236381
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-21T21:15:01.381Z"
  },
  {
      "idhistorico": 798,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-11T05:01:19.656Z",
          "valorTotal": 219846
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-15T16:57:22.260Z"
  },
  {
      "idhistorico": 799,
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
          "totalProductos": 5,
          "fechacreado": "2021-08-02T18:15:50.393Z",
          "valorTotal": 187442
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-07T08:41:09.887Z"
  },
  {
      "idhistorico": 800,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-28T22:51:30.472Z",
          "valorTotal": 202867
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-01-28T04:00:30.533Z"
  },
  {
      "idhistorico": 801,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-04-27T03:27:44.401Z",
          "valorTotal": 201566
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-13T19:19:58.551Z"
  },
  {
      "idhistorico": 802,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-05T04:25:25.752Z",
          "valorTotal": 179429
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-09T12:56:36.583Z"
  },
  {
      "idhistorico": 803,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-13T23:45:22.193Z",
          "valorTotal": 136133
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-11T09:01:55.931Z"
  },
  {
      "idhistorico": 804,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-06-01T21:14:26.193Z",
          "valorTotal": 172286
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T11:33:56.622Z"
  },
  {
      "idhistorico": 805,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-08-06T21:26:05.813Z",
          "valorTotal": 67079
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-24T22:48:44.020Z"
  },
  {
      "idhistorico": 806,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-24T08:40:01.861Z",
          "valorTotal": 156809
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-25T09:08:07.321Z"
  },
  {
      "idhistorico": 807,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-29T00:28:48.131Z",
          "valorTotal": 248900
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-25T15:44:34.115Z"
  },
  {
      "idhistorico": 808,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-06T16:43:35.331Z",
          "valorTotal": 199462
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-22T20:48:37.362Z"
  },
  {
      "idhistorico": 809,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-24T04:39:48.576Z",
          "valorTotal": 97680
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-14T06:04:02.949Z"
  },
  {
      "idhistorico": 810,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-06-29T15:33:40.874Z",
          "valorTotal": 40774
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-18T13:27:59.554Z"
  },
  {
      "idhistorico": 811,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-10T14:23:46.147Z",
          "valorTotal": 167447
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-19T22:19:32.389Z"
  },
  {
      "idhistorico": 812,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-11T20:36:58.759Z",
          "valorTotal": 41348
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-08T06:49:48.395Z"
  },
  {
      "idhistorico": 813,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-01T04:04:07.498Z",
          "valorTotal": 227053
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-07T11:43:21.181Z"
  },
  {
      "idhistorico": 814,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-01-20T00:09:06.139Z",
          "valorTotal": 112523
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-04T16:14:19.409Z"
  },
  {
      "idhistorico": 815,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-07-26T15:42:52.249Z",
          "valorTotal": 194313
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-13T08:06:18.476Z"
  },
  {
      "idhistorico": 816,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-12T21:58:31.800Z",
          "valorTotal": 175613
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-03T05:26:06.872Z"
  },
  {
      "idhistorico": 817,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-06T06:49:44.171Z",
          "valorTotal": 179264
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-07T04:28:20.160Z"
  },
  {
      "idhistorico": 818,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-04-11T15:27:17.897Z",
          "valorTotal": 220826
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-21T23:35:52.606Z"
  },
  {
      "idhistorico": 819,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-31T03:24:59.827Z",
          "valorTotal": 86839
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-27T13:15:31.374Z"
  },
  {
      "idhistorico": 820,
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
          "totalProductos": 5,
          "fechacreado": "2021-08-07T13:09:41.391Z",
          "valorTotal": 150899
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-02T00:33:25.523Z"
  },
  {
      "idhistorico": 821,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-01-17T19:13:31.501Z",
          "valorTotal": 72050
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-28T19:35:07.062Z"
  },
  {
      "idhistorico": 822,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-04-11T11:09:52.338Z",
          "valorTotal": 65244
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-12T09:15:33.627Z"
  },
  {
      "idhistorico": 823,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-06-24T01:35:19.482Z",
          "valorTotal": 121817
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-16T01:07:30.006Z"
  },
  {
      "idhistorico": 824,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-04-19T11:47:05.910Z",
          "valorTotal": 146641
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-17T05:26:11.199Z"
  },
  {
      "idhistorico": 825,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-02-18T20:31:58.087Z",
          "valorTotal": 54348
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-01T12:06:02.157Z"
  },
  {
      "idhistorico": 826,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-30T20:46:29.164Z",
          "valorTotal": 61625
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-03T18:25:49.489Z"
  },
  {
      "idhistorico": 827,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-26T08:35:56.842Z",
          "valorTotal": 46882
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-01T08:17:43.377Z"
  },
  {
      "idhistorico": 828,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-06-04T05:21:58.318Z",
          "valorTotal": 178904
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-27T04:24:55.482Z"
  },
  {
      "idhistorico": 829,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-07-02T04:21:58.039Z",
          "valorTotal": 212413
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-09T09:05:18.995Z"
  },
  {
      "idhistorico": 830,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-04-28T08:57:41.916Z",
          "valorTotal": 121736
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-19T21:01:54.193Z"
  },
  {
      "idhistorico": 831,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-05-18T07:04:33.111Z",
          "valorTotal": 42229
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-12T09:14:12.552Z"
  },
  {
      "idhistorico": 832,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 4,
          "fechacreado": "2021-01-24T14:49:00.277Z",
          "valorTotal": 177763
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-02T01:09:26.842Z"
  },
  {
      "idhistorico": 833,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-29T08:00:41.020Z",
          "valorTotal": 231834
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-13T04:23:35.289Z"
  },
  {
      "idhistorico": 834,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 2,
          "fechacreado": "2021-02-25T14:26:42.942Z",
          "valorTotal": 36608
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T04:07:00.284Z"
  },
  {
      "idhistorico": 835,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-29T23:05:00.668Z",
          "valorTotal": 26413
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-15T15:55:12.722Z"
  },
  {
      "idhistorico": 836,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-04-18T04:43:27.431Z",
          "valorTotal": 221360
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-12T05:54:57.614Z"
  },
  {
      "idhistorico": 837,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-02T11:30:02.124Z",
          "valorTotal": 127532
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-17T12:30:24.748Z"
  },
  {
      "idhistorico": 838,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 2,
          "fechacreado": "2021-04-28T18:17:53.333Z",
          "valorTotal": 123763
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-10T04:29:00.527Z"
  },
  {
      "idhistorico": 839,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-04-09T23:02:54.714Z",
          "valorTotal": 103229
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-26T21:46:26.273Z"
  },
  {
      "idhistorico": 840,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-18T06:26:03.772Z",
          "valorTotal": 27932
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-17T06:02:35.907Z"
  },
  {
      "idhistorico": 841,
      "devolucion": {
          "iddevolucion": 8,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-02-23T00:58:58.683Z",
          "valorTotal": 103855
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-08T15:31:40.932Z"
  },
  {
      "idhistorico": 842,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-01T16:33:20.906Z",
          "valorTotal": 196279
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-01T15:56:03.735Z"
  },
  {
      "idhistorico": 843,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-01-17T04:10:53.324Z",
          "valorTotal": 169155
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-09T03:51:43.673Z"
  },
  {
      "idhistorico": 844,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-05-27T10:02:22.520Z",
          "valorTotal": 174471
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-04T06:53:00.475Z"
  },
  {
      "idhistorico": 845,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-06-27T22:12:40.731Z",
          "valorTotal": 172057
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-19T18:53:31.598Z"
  },
  {
      "idhistorico": 846,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-07-01T17:44:54.291Z",
          "valorTotal": 101708
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-10T11:05:57.150Z"
  },
  {
      "idhistorico": 847,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-29T11:11:41.330Z",
          "valorTotal": 40879
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-07T01:33:50.955Z"
  },
  {
      "idhistorico": 848,
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
          "fechacreado": "2021-02-17T08:02:35.482Z",
          "valorTotal": 209958
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-24T21:50:44.986Z"
  },
  {
      "idhistorico": 849,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-07-04T00:11:25.672Z",
          "valorTotal": 23476
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-26T13:24:48.968Z"
  },
  {
      "idhistorico": 850,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-16T08:25:31.954Z",
          "valorTotal": 206262
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-02T14:24:26.430Z"
  },
  {
      "idhistorico": 851,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-08T07:18:23.581Z",
          "valorTotal": 169465
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-28T07:21:06.555Z"
  },
  {
      "idhistorico": 852,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-23T07:54:57.762Z",
          "valorTotal": 46096
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-14T12:28:26.990Z"
  },
  {
      "idhistorico": 853,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 3,
          "fechacreado": "2021-06-27T09:37:51.353Z",
          "valorTotal": 132250
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-20T10:15:04.994Z"
  },
  {
      "idhistorico": 854,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-12T21:30:17.197Z",
          "valorTotal": 56254
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-20T23:04:12.210Z"
  },
  {
      "idhistorico": 855,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-07-30T21:00:12.015Z",
          "valorTotal": 216949
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-18T20:50:40.463Z"
  },
  {
      "idhistorico": 856,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-04-26T00:13:03.335Z",
          "valorTotal": 131122
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-13T02:34:37.390Z"
  },
  {
      "idhistorico": 857,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-20T07:23:26.433Z",
          "valorTotal": 100191
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-30T14:48:26.489Z"
  },
  {
      "idhistorico": 858,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-03-21T19:48:25.217Z",
          "valorTotal": 101013
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-09T01:00:38.177Z"
  },
  {
      "idhistorico": 859,
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
          "fechacreado": "2021-01-29T22:20:46.062Z",
          "valorTotal": 89466
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-24T21:28:50.695Z"
  },
  {
      "idhistorico": 860,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-30T10:03:40.169Z",
          "valorTotal": 125330
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-23T11:14:52.008Z"
  },
  {
      "idhistorico": 861,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-21T15:15:33.539Z",
          "valorTotal": 218161
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-20T14:14:38.659Z"
  },
  {
      "idhistorico": 862,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-08-01T10:53:55.400Z",
          "valorTotal": 76872
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-08-08T01:56:05.129Z"
  },
  {
      "idhistorico": 863,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-03-06T12:31:52.404Z",
          "valorTotal": 212638
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-23T02:56:13.598Z"
  },
  {
      "idhistorico": 864,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-26T05:58:27.611Z",
          "valorTotal": 25259
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-08T14:33:19.849Z"
  },
  {
      "idhistorico": 865,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-03T00:06:55.604Z",
          "valorTotal": 185525
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-10T02:44:27.161Z"
  },
  {
      "idhistorico": 866,
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
          "fechacreado": "2021-03-27T05:13:36.964Z",
          "valorTotal": 248341
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-02T01:38:58.802Z"
  },
  {
      "idhistorico": 867,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-18T17:39:00.311Z",
          "valorTotal": 200014
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-09T23:05:09.807Z"
  },
  {
      "idhistorico": 868,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-03-12T16:37:23.097Z",
          "valorTotal": 232304
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-21T19:21:07.193Z"
  },
  {
      "idhistorico": 869,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-01-07T17:44:57.159Z",
          "valorTotal": 90071
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-14T22:11:34.970Z"
  },
  {
      "idhistorico": 870,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-22T12:10:25.131Z",
          "valorTotal": 90736
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-25T12:28:01.374Z"
  },
  {
      "idhistorico": 871,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-20T10:31:38.649Z",
          "valorTotal": 194413
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-11T10:07:06.153Z"
  },
  {
      "idhistorico": 872,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-05-09T12:54:21.541Z",
          "valorTotal": 56793
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-24T04:52:09.671Z"
  },
  {
      "idhistorico": 873,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-03-30T08:37:28.523Z",
          "valorTotal": 193128
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-08T21:11:46.998Z"
  },
  {
      "idhistorico": 874,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-23T16:42:35.487Z",
          "valorTotal": 137498
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-27T05:50:46.249Z"
  },
  {
      "idhistorico": 875,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-01-19T05:55:54.484Z",
          "valorTotal": 114772
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-19T01:32:59.412Z"
  },
  {
      "idhistorico": 876,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 1,
          "fechacreado": "2021-01-16T02:17:59.547Z",
          "valorTotal": 45394
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-02T11:16:29.032Z"
  },
  {
      "idhistorico": 877,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 3,
          "fechacreado": "2021-02-24T20:45:43.733Z",
          "valorTotal": 147664
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-06T08:47:34.430Z"
  },
  {
      "idhistorico": 878,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-05T09:57:01.603Z",
          "valorTotal": 232391
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-20T14:34:19.275Z"
  },
  {
      "idhistorico": 879,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-15T16:29:14.999Z",
          "valorTotal": 186167
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-27T22:09:43.979Z"
  },
  {
      "idhistorico": 880,
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
          "fechacreado": "2021-05-29T18:09:11.692Z",
          "valorTotal": 219710
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-25T11:09:15.200Z"
  },
  {
      "idhistorico": 881,
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
          "fechacreado": "2021-01-07T17:52:17.515Z",
          "valorTotal": 219922
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-21T09:53:27.961Z"
  },
  {
      "idhistorico": 882,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-03-13T14:53:58.057Z",
          "valorTotal": 126508
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-04T19:44:00.374Z"
  },
  {
      "idhistorico": 883,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-18T09:25:15.326Z",
          "valorTotal": 180681
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T13:12:18.895Z"
  },
  {
      "idhistorico": 884,
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
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-08-10T22:36:46.823Z",
          "valorTotal": 248501
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-10T10:17:16.191Z"
  },
  {
      "idhistorico": 885,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-21T12:26:48.755Z",
          "valorTotal": 156966
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-05T21:57:33.815Z"
  },
  {
      "idhistorico": 886,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-05-13T22:47:43.140Z",
          "valorTotal": 112940
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-10T23:36:57.020Z"
  },
  {
      "idhistorico": 887,
      "devolucion": {
          "iddevolucion": 10,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-06-10T00:55:00.779Z",
          "valorTotal": 200772
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-22T08:07:08.410Z"
  },
  {
      "idhistorico": 888,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-03T08:02:07.578Z",
          "valorTotal": 181077
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-13T03:51:42.489Z"
  },
  {
      "idhistorico": 889,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-02T20:59:59.827Z",
          "valorTotal": 228256
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-27T13:16:55.896Z"
  },
  {
      "idhistorico": 890,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-07-08T18:48:35.932Z",
          "valorTotal": 176486
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-27T10:41:05.071Z"
  },
  {
      "idhistorico": 891,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-01-28T04:46:14.207Z",
          "valorTotal": 218687
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-07T22:19:07.528Z"
  },
  {
      "idhistorico": 892,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 3,
          "fechacreado": "2021-04-22T18:58:17.403Z",
          "valorTotal": 232337
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-30T16:08:29.620Z"
  },
  {
      "idhistorico": 893,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-08T08:52:20.230Z",
          "valorTotal": 148422
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-19T01:31:18.520Z"
  },
  {
      "idhistorico": 894,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-08-07T06:02:32.469Z",
          "valorTotal": 167171
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-13T04:42:00.431Z"
  },
  {
      "idhistorico": 895,
      "devolucion": {
          "iddevolucion": 6,
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
          "fechacreado": "2021-06-11T03:48:22.912Z",
          "valorTotal": 62299
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-30T20:20:41.641Z"
  },
  {
      "idhistorico": 896,
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
          "totalProductos": 4,
          "fechacreado": "2021-03-27T20:49:11.758Z",
          "valorTotal": 21542
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-01-29T10:29:13.225Z"
  },
  {
      "idhistorico": 897,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 3,
          "fechacreado": "2021-08-07T00:49:36.044Z",
          "valorTotal": 30033
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-07T13:30:08.397Z"
  },
  {
      "idhistorico": 898,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-20T03:44:31.449Z",
          "valorTotal": 231835
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-19T22:56:04.748Z"
  },
  {
      "idhistorico": 899,
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
          "totalProductos": 4,
          "fechacreado": "2021-08-07T21:16:48.045Z",
          "valorTotal": 58265
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-08T22:09:46.563Z"
  },
  {
      "idhistorico": 900,
      "devolucion": {
          "iddevolucion": 6,
          "orderformid": "8090-101",
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
          "fechacreado": "2021-02-08T22:05:04.844Z",
          "valorTotal": 186214
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-01T04:45:28.690Z"
  },
  {
      "idhistorico": 901,
      "devolucion": {
          "iddevolucion": 9,
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
          "fechacreado": "2021-02-20T01:47:20.525Z",
          "valorTotal": 249372
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-06T21:57:51.379Z"
  },
  {
      "idhistorico": 902,
      "devolucion": {
          "iddevolucion": 2,
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
          "fechacreado": "2021-07-08T07:58:55.944Z",
          "valorTotal": 31894
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-08T17:31:08.665Z"
  },
  {
      "idhistorico": 903,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-15T21:08:39.212Z",
          "valorTotal": 238909
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-24T06:34:44.555Z"
  },
  {
      "idhistorico": 904,
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
          "motivo": "Equivocado",
          "totalProductos": 2,
          "fechacreado": "2021-01-12T03:15:21.002Z",
          "valorTotal": 224486
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-24T19:13:46.078Z"
  },
  {
      "idhistorico": 905,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-01T12:01:37.838Z",
          "valorTotal": 78699
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-30T16:41:38.505Z"
  },
  {
      "idhistorico": 906,
      "devolucion": {
          "iddevolucion": 5,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-04-13T06:41:56.771Z",
          "valorTotal": 26683
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-21T05:21:58.356Z"
  },
  {
      "idhistorico": 907,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-06-12T01:42:26.653Z",
          "valorTotal": 155044
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-21T04:00:07.460Z"
  },
  {
      "idhistorico": 908,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-29T10:49:57.427Z",
          "valorTotal": 127679
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-07T08:35:30.063Z"
  },
  {
      "idhistorico": 909,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-07T07:22:42.477Z",
          "valorTotal": 155764
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-24T04:18:54.172Z"
  },
  {
      "idhistorico": 910,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 5,
          "fechacreado": "2021-05-20T18:01:34.810Z",
          "valorTotal": 63906
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-30T14:51:34.352Z"
  },
  {
      "idhistorico": 911,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-06-29T10:35:08.800Z",
          "valorTotal": 103002
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-05T15:34:54.425Z"
  },
  {
      "idhistorico": 912,
      "devolucion": {
          "iddevolucion": 2,
          "orderformid": "8090-100",
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
          "fechacreado": "2021-03-10T01:31:23.023Z",
          "valorTotal": 169227
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-16T11:34:17.680Z"
  },
  {
      "idhistorico": 913,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-05-09T05:06:22.065Z",
          "valorTotal": 82514
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-20T22:14:19.210Z"
  },
  {
      "idhistorico": 914,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-09T23:14:23.398Z",
          "valorTotal": 60436
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-29T06:23:06.147Z"
  },
  {
      "idhistorico": 915,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-06-10T21:22:30.568Z",
          "valorTotal": 190470
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-12T15:33:50.187Z"
  },
  {
      "idhistorico": 916,
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
          "totalProductos": 1,
          "fechacreado": "2021-02-09T01:31:58.520Z",
          "valorTotal": 92712
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-20T14:24:12.515Z"
  },
  {
      "idhistorico": 917,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 5,
          "fechacreado": "2021-02-26T17:32:39.956Z",
          "valorTotal": 28567
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-16T14:56:00.783Z"
  },
  {
      "idhistorico": 918,
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
          "motivo": "Calularon mal",
          "totalProductos": 1,
          "fechacreado": "2021-07-19T23:08:32.266Z",
          "valorTotal": 210885
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-20T08:34:31.292Z"
  },
  {
      "idhistorico": 919,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-05-18T05:57:05.501Z",
          "valorTotal": 117954
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-25T06:19:24.163Z"
  },
  {
      "idhistorico": 920,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-03-06T20:08:41.346Z",
          "valorTotal": 113320
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T03:46:19.977Z"
  },
  {
      "idhistorico": 921,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-15T16:21:51.388Z",
          "valorTotal": 51004
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-20T17:16:02.902Z"
  },
  {
      "idhistorico": 922,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-05-05T19:58:35.557Z",
          "valorTotal": 222566
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-24T14:00:00.430Z"
  },
  {
      "idhistorico": 923,
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
          "totalProductos": 3,
          "fechacreado": "2021-07-25T05:55:15.281Z",
          "valorTotal": 28171
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-07T11:29:41.067Z"
  },
  {
      "idhistorico": 924,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-01-21T19:21:28.060Z",
          "valorTotal": 83313
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T10:56:50.567Z"
  },
  {
      "idhistorico": 925,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-03T18:05:33.543Z",
          "valorTotal": 37105
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-22T05:13:54.044Z"
  },
  {
      "idhistorico": 926,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-11T17:30:38.262Z",
          "valorTotal": 184841
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-13T13:14:14.823Z"
  },
  {
      "idhistorico": 927,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-06-08T00:09:14.338Z",
          "valorTotal": 140403
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-17T13:50:00.503Z"
  },
  {
      "idhistorico": 928,
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
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-02-27T08:05:41.771Z",
          "valorTotal": 89636
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-07-19T09:53:35.154Z"
  },
  {
      "idhistorico": 929,
      "devolucion": {
          "iddevolucion": 1,
          "orderformid": "8090-99",
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
          "fechacreado": "2021-06-29T23:49:58.685Z",
          "valorTotal": 107905
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-01T02:11:33.194Z"
  },
  {
      "idhistorico": 930,
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
          "motivo": "Equivocado",
          "totalProductos": 5,
          "fechacreado": "2021-01-01T14:39:06.666Z",
          "valorTotal": 101459
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-14T10:38:53.986Z"
  },
  {
      "idhistorico": 931,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-12T19:16:54.733Z",
          "valorTotal": 198148
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-02T11:55:43.204Z"
  },
  {
      "idhistorico": 932,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-05-19T04:01:35.002Z",
          "valorTotal": 38646
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-07T19:34:13.518Z"
  },
  {
      "idhistorico": 933,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-08T10:23:26.958Z",
          "valorTotal": 106163
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-06T01:03:26.866Z"
  },
  {
      "idhistorico": 934,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 1,
          "fechacreado": "2021-08-07T06:14:43.021Z",
          "valorTotal": 94579
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-19T23:53:54.606Z"
  },
  {
      "idhistorico": 935,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-08-07T23:57:15.343Z",
          "valorTotal": 186921
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-29T04:45:28.605Z"
  },
  {
      "idhistorico": 936,
      "devolucion": {
          "iddevolucion": 6,
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
          "totalProductos": 2,
          "fechacreado": "2021-08-04T03:34:33.280Z",
          "valorTotal": 226932
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-15T11:20:41.957Z"
  },
  {
      "idhistorico": 937,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-102",
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
          "fechacreado": "2021-02-25T23:52:19.578Z",
          "valorTotal": 223701
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-25T18:32:55.647Z"
  },
  {
      "idhistorico": 938,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-06-30T12:24:42.705Z",
          "valorTotal": 129527
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-29T17:33:45.182Z"
  },
  {
      "idhistorico": 939,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-03-12T04:25:49.601Z",
          "valorTotal": 175518
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-21T20:06:52.769Z"
  },
  {
      "idhistorico": 940,
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
          "fechacreado": "2021-04-30T02:24:58.282Z",
          "valorTotal": 73558
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-29T19:52:37.984Z"
  },
  {
      "idhistorico": 941,
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
          "totalProductos": 3,
          "fechacreado": "2021-03-03T08:10:48.671Z",
          "valorTotal": 53276
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-23T09:59:46.539Z"
  },
  {
      "idhistorico": 942,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-06-25T18:48:49.828Z",
          "valorTotal": 246674
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-07T07:13:02.803Z"
  },
  {
      "idhistorico": 943,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 1,
          "fechacreado": "2021-06-28T04:29:56.597Z",
          "valorTotal": 100290
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-11T00:03:44.436Z"
  },
  {
      "idhistorico": 944,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 4,
          "fechacreado": "2021-05-06T04:13:12.132Z",
          "valorTotal": 66696
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-01-24T13:29:38.334Z"
  },
  {
      "idhistorico": 945,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-07-02T07:49:05.611Z",
          "valorTotal": 106243
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-27T23:32:40.481Z"
  },
  {
      "idhistorico": 946,
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
          "totalProductos": 1,
          "fechacreado": "2021-07-22T18:20:16.164Z",
          "valorTotal": 115196
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-18T17:25:23.866Z"
  },
  {
      "idhistorico": 947,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-03-20T11:41:48.489Z",
          "valorTotal": 209354
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-17T10:50:51.993Z"
  },
  {
      "idhistorico": 948,
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
          "motivo": "No lo quiero",
          "totalProductos": 5,
          "fechacreado": "2021-01-10T10:13:21.912Z",
          "valorTotal": 51202
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-16T18:52:17.689Z"
  },
  {
      "idhistorico": 949,
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
          "totalProductos": 4,
          "fechacreado": "2021-02-15T16:53:19.074Z",
          "valorTotal": 212890
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-08-02T05:51:06.662Z"
  },
  {
      "idhistorico": 950,
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
          "motivo": "Calularon mal",
          "totalProductos": 4,
          "fechacreado": "2021-01-15T00:50:52.922Z",
          "valorTotal": 150944
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-24T11:17:35.969Z"
  },
  {
      "idhistorico": 951,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-26T02:21:31.906Z",
          "valorTotal": 187446
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-01-30T18:48:20.433Z"
  },
  {
      "idhistorico": 952,
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
          "totalProductos": 5,
          "fechacreado": "2021-06-08T20:49:27.457Z",
          "valorTotal": 92524
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-04-21T22:45:46.808Z"
  },
  {
      "idhistorico": 953,
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
          "totalProductos": 4,
          "fechacreado": "2021-04-12T22:09:55.881Z",
          "valorTotal": 116604
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-01T19:45:39.066Z"
  },
  {
      "idhistorico": 954,
      "devolucion": {
          "iddevolucion": 5,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-25T11:47:52.856Z",
          "valorTotal": 40689
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-09T03:40:58.511Z"
  },
  {
      "idhistorico": 955,
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
          "totalProductos": 3,
          "fechacreado": "2021-05-18T20:49:25.271Z",
          "valorTotal": 76391
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-16T08:34:53.755Z"
  },
  {
      "idhistorico": 956,
      "devolucion": {
          "iddevolucion": 7,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-06T21:21:15.967Z",
          "valorTotal": 214969
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-07-29T12:02:04.562Z"
  },
  {
      "idhistorico": 957,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-08T01:39:29.452Z",
          "valorTotal": 197863
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-26T16:05:30.141Z"
  },
  {
      "idhistorico": 958,
      "devolucion": {
          "iddevolucion": 9,
          "orderformid": "8090-100",
          "cliente": {
              "cedula": "80073720",
              "name": "SANTIAGO"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 4,
          "fechacreado": "2021-07-17T09:13:26.413Z",
          "valorTotal": 92422
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-06T00:45:56.949Z"
  },
  {
      "idhistorico": 959,
      "devolucion": {
          "iddevolucion": 3,
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
          "totalProductos": 5,
          "fechacreado": "2021-08-08T05:41:07.918Z",
          "valorTotal": 157336
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-08-04T16:10:25.948Z"
  },
  {
      "idhistorico": 960,
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
          "motivo": "Calularon mal",
          "totalProductos": 5,
          "fechacreado": "2021-05-07T10:46:47.038Z",
          "valorTotal": 173261
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-06-11T20:19:54.277Z"
  },
  {
      "idhistorico": 961,
      "devolucion": {
          "iddevolucion": 3,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073725",
              "name": "ROSA"
          },
          "seller": {
              "id": "82",
              "name": "Olímpica"
          },
          "motivo": "No lo quiero",
          "totalProductos": 1,
          "fechacreado": "2021-05-09T12:27:51.893Z",
          "valorTotal": 139601
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-05-14T03:32:45.394Z"
  },
  {
      "idhistorico": 962,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 2,
          "fechacreado": "2021-05-16T15:52:17.471Z",
          "valorTotal": 234193
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-13T21:44:36.621Z"
  },
  {
      "idhistorico": 963,
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
          "motivo": "Calularon mal",
          "totalProductos": 2,
          "fechacreado": "2021-02-14T17:54:21.076Z",
          "valorTotal": 63850
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-04T19:49:44.011Z"
  },
  {
      "idhistorico": 964,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-03-21T10:39:13.018Z",
          "valorTotal": 170498
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-02T16:39:25.330Z"
  },
  {
      "idhistorico": 965,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-27T19:10:15.137Z",
          "valorTotal": 88050
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-09T13:33:24.252Z"
  },
  {
      "idhistorico": 966,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-06-27T01:46:16.425Z",
          "valorTotal": 138895
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-03-06T18:32:53.686Z"
  },
  {
      "idhistorico": 967,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-07-09T18:48:05.069Z",
          "valorTotal": 47892
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-22T19:24:20.955Z"
  },
  {
      "idhistorico": 968,
      "devolucion": {
          "iddevolucion": 1,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-07T18:38:46.170Z",
          "valorTotal": 54817
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-17T23:49:56.555Z"
  },
  {
      "idhistorico": 969,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-05-11T03:39:07.468Z",
          "valorTotal": 239093
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-08-01T10:46:59.407Z"
  },
  {
      "idhistorico": 970,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-04-24T15:45:04.364Z",
          "valorTotal": 131154
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-24T07:45:45.509Z"
  },
  {
      "idhistorico": 971,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-04-20T02:22:47.266Z",
          "valorTotal": 155244
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-03-13T22:06:31.742Z"
  },
  {
      "idhistorico": 972,
      "devolucion": {
          "iddevolucion": 4,
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
          "fechacreado": "2021-04-17T08:32:19.950Z",
          "valorTotal": 166241
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-06-19T11:55:49.432Z"
  },
  {
      "idhistorico": 973,
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
          "fechacreado": "2021-05-15T20:26:13.813Z",
          "valorTotal": 204959
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-01T20:44:25.631Z"
  },
  {
      "idhistorico": 974,
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
          "fechacreado": "2021-06-23T10:24:55.869Z",
          "valorTotal": 137940
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-11T08:58:08.495Z"
  },
  {
      "idhistorico": 975,
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
          "motivo": "Equivocado",
          "totalProductos": 4,
          "fechacreado": "2021-04-02T02:50:14.933Z",
          "valorTotal": 69562
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-09T01:31:35.936Z"
  },
  {
      "idhistorico": 976,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-03-10T18:14:02.670Z",
          "valorTotal": 161538
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-03-14T13:47:14.953Z"
  },
  {
      "idhistorico": 977,
      "devolucion": {
          "iddevolucion": 2,
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
          "totalProductos": 2,
          "fechacreado": "2021-07-16T21:32:47.732Z",
          "valorTotal": 116104
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-05-26T01:48:19.211Z"
  },
  {
      "idhistorico": 978,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 3,
          "fechacreado": "2021-01-25T15:51:21.933Z",
          "valorTotal": 220658
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-24T11:05:17.130Z"
  },
  {
      "idhistorico": 979,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 1,
          "fechacreado": "2021-05-19T06:43:23.511Z",
          "valorTotal": 202910
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-12T15:30:17.033Z"
  },
  {
      "idhistorico": 980,
      "devolucion": {
          "iddevolucion": 7,
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
          "fechacreado": "2021-02-17T11:54:32.450Z",
          "valorTotal": 138722
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-22T04:51:16.316Z"
  },
  {
      "idhistorico": 981,
      "devolucion": {
          "iddevolucion": 8,
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
          "fechacreado": "2021-03-30T10:48:50.674Z",
          "valorTotal": 73052
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-06T23:34:12.905Z"
  },
  {
      "idhistorico": 982,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-02-01T07:42:31.656Z",
          "valorTotal": 89565
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T02:55:47.800Z"
  },
  {
      "idhistorico": 983,
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
          "motivo": "No lo quiero",
          "totalProductos": 3,
          "fechacreado": "2021-08-08T01:14:07.427Z",
          "valorTotal": 165101
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-05T02:30:37.166Z"
  },
  {
      "idhistorico": 984,
      "devolucion": {
          "iddevolucion": 1,
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
          "fechacreado": "2021-03-01T21:44:50.989Z",
          "valorTotal": 105426
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-09T09:03:15.285Z"
  },
  {
      "idhistorico": 985,
      "devolucion": {
          "iddevolucion": 5,
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
          "fechacreado": "2021-04-26T13:16:44.961Z",
          "valorTotal": 50776
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-04-06T03:56:17.517Z"
  },
  {
      "idhistorico": 986,
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
          "motivo": "No lo quiero",
          "totalProductos": 2,
          "fechacreado": "2021-03-13T00:13:00.825Z",
          "valorTotal": 70423
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-05-07T16:39:07.235Z"
  },
  {
      "idhistorico": 987,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-03-04T11:50:23.332Z",
          "valorTotal": 230609
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-04-12T14:49:15.950Z"
  },
  {
      "idhistorico": 988,
      "devolucion": {
          "iddevolucion": 8,
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
          "totalProductos": 5,
          "fechacreado": "2021-03-07T02:14:46.725Z",
          "valorTotal": 58907
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-06-22T17:39:56.568Z"
  },
  {
      "idhistorico": 989,
      "devolucion": {
          "iddevolucion": 4,
          "orderformid": "8090-99",
          "cliente": {
              "cedula": "80073723",
              "name": "LUIS"
          },
          "seller": {
              "id": "80",
              "name": "Copidrogas"
          },
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-05-12T13:28:23.910Z",
          "valorTotal": 55683
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-23T07:29:08.284Z"
  },
  {
      "idhistorico": 990,
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
          "motivo": "Equivocado",
          "totalProductos": 1,
          "fechacreado": "2021-07-16T18:47:30.041Z",
          "valorTotal": 67929
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-06-06T05:42:02.817Z"
  },
  {
      "idhistorico": 991,
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
          "totalProductos": 2,
          "fechacreado": "2021-03-17T12:19:21.542Z",
          "valorTotal": 132677
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-02-19T08:54:02.833Z"
  },
  {
      "idhistorico": 992,
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
          "motivo": "Equivocado",
          "totalProductos": 3,
          "fechacreado": "2021-04-04T03:53:11.453Z",
          "valorTotal": 39403
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-02-03T17:02:43.600Z"
  },
  {
      "idhistorico": 993,
      "devolucion": {
          "iddevolucion": 3,
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
          "fechacreado": "2021-08-09T21:19:17.404Z",
          "valorTotal": 90327
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-02-06T12:37:48.394Z"
  },
  {
      "idhistorico": 994,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 4,
          "fechacreado": "2021-07-17T02:23:17.087Z",
          "valorTotal": 22162
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-07-05T17:08:11.054Z"
  },
  {
      "idhistorico": 995,
      "devolucion": {
          "iddevolucion": 10,
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
          "fechacreado": "2021-06-19T06:51:15.726Z",
          "valorTotal": 48044
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-04-30T10:51:39.668Z"
  },
  {
      "idhistorico": 996,
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
          "motivo": "Calularon mal",
          "totalProductos": 3,
          "fechacreado": "2021-07-13T21:46:00.118Z",
          "valorTotal": 50972
      },
      "estado": "Confirmado",
      "fechaEstado": "2021-02-23T16:24:22.369Z"
  },
  {
      "idhistorico": 997,
      "devolucion": {
          "iddevolucion": 4,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-26T01:31:12.097Z",
          "valorTotal": 45989
      },
      "estado": "En Proceso",
      "fechaEstado": "2021-05-22T00:32:08.646Z"
  },
  {
      "idhistorico": 998,
      "devolucion": {
          "iddevolucion": 10,
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
          "totalProductos": 5,
          "fechacreado": "2021-04-25T09:10:08.430Z",
          "valorTotal": 89451
      },
      "estado": "Rechazado",
      "fechaEstado": "2021-07-21T14:15:36.702Z"
  },
  {
      "idhistorico": 999,
      "devolucion": {
          "iddevolucion": 9,
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
          "totalProductos": 2,
          "fechacreado": "2021-06-27T08:53:50.485Z",
          "valorTotal": 35957
      },
      "estado": "Finalizado",
      "fechaEstado": "2021-03-26T16:31:18.448Z"
  }
]
const Results = (props:any) => {

   
    const {reportFilter} = props

    const {cc, status} = reportFilter
    

    const toRender = data.filter((element:any)=>
    {
     
      return element.devolucion.cliente.cedula === cc && 
      element.estado === status
    })

    console.log("DATATORENDER>>", toRender)
    

    return (
       <div className="w-100">
        <h2 className="mt0 mb6">Resultados:</h2>
        
      </div>
    )
}

const mapStateToProps = (state:any) =>{
  
    return {
      reportFilter: state.reportFilter
    }
}

export default  connect(mapStateToProps)(Results)

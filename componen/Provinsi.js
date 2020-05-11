import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native'

class List extends React.Component{
    constructor(){
        super();
        this.state = {
            data:[
                {
                    "fid":11,
                    "kodeProvi":31,
                    "provinsi":"DKI Jakarta",
                    "kasusPosi":4855,
                    "kasusSemb":745,
                    "kasusMeni":423
                },
            {
                "fid":12,
                "kodeProvi":32,
                "provinsi":"Jawa Barat",
                "kasusPosi":1381,
                "kasusSemb":182,
                "kasusMeni":90
            },
            {
                "fid":15,
                "kodeProvi":35,
                "provinsi":"Jawa Timur",
                "kasusPosi":1267,
                "kasusSemb":206,
                "kasusMeni":133
            },
            {
                "fid":13,
                "kodeProvi":33,
                "provinsi":"Jawa Tengah",
                "kasusPosi":904,
                "kasusSemb":145,
                "kasusMeni":64
            },
            {
                "fid":27,
                "kodeProvi":73,
                "provinsi":"Sulawesi Selatan",
                "kasusPosi":684,
                "kasusSemb":238,
                "kasusMeni":45
            },
            {
                "fid":16,
                "kodeProvi":36,
                "provinsi":"Banten",
                "kasusPosi":495,
                "kasusSemb":122,
                "kasusMeni":56
            },
            {
                "fid":18,
                "kodeProvi":52,
                "provinsi":"Nusa Tenggara Barat",
                "kasusPosi":300,
                "kasusSemb":57,
                "kasusMeni":5
            },
            {
                "fid":17,
                "kodeProvi":51,
                "provinsi":"Bali",
                "kasusPosi":287,
                "kasusSemb":183,
                "kasusMeni":4
            },
            {
                "fid":3,
                "kodeProvi":13,
                "provinsi":"Sumatera Barat",
                "kasusPosi":252,
                "kasusSemb":41,
                "kasusMeni":16},
            {
                "fid":33,
                "kodeProvi":94,
                "provinsi":"Papua",
                "kasusPosi":252,
                "kasusSemb":48,
                "kasusMeni":6
            },
            {"fid":22,"kodeProvi":63,"provinsi":"Kalimantan Selatan","kasusPosi":238,"kasusSemb":24,"kasusMeni":9},
            {"fid":6,"kodeProvi":16,"provinsi":"Sumatera Selatan","kasusPosi":227,"kasusSemb":47,"kasusMeni":6},
            {"fid":21,"kodeProvi":62,"provinsi":"Kalimantan Tengah","kasusPosi":188,"kasusSemb":15,"kasusMeni":7},
            {"fid":23,"kodeProvi":64,"provinsi":"Kalimantan Timur","kasusPosi":182,"kasusSemb":13,"kasusMeni":2},
            {"fid":2,"kodeProvi":12,"provinsi":"Sumatera Utara","kasusPosi":142,"kasusSemb":48,"kasusMeni":16},
            {"fid":14,"kodeProvi":34,"provinsi":"Daerah Istimewa Yogyakarta","kasusPosi":137,"kasusSemb":57,"kasusMeni":7},
            {"fid":24,"kodeProvi":65,"provinsi":"Kalimantan Utara","kasusPosi":131,"kasusSemb":6,"kasusMeni":1},
            {"fid":10,"kodeProvi":21,"provinsi":"Kepulauan Riau","kasusPosi":98,"kasusSemb":63,"kasusMeni":10},
            {"fid":20,"kodeProvi":61,"provinsi":"Kalimantan Barat","kasusPosi":95,"kasusSemb":11,"kasusMeni":3},
            {"fid":26,"kodeProvi":72,"provinsi":"Sulawesi Tengah","kasusPosi":75,"kasusSemb":12,"kasusMeni":3},
            {"fid":28,"kodeProvi":74,"provinsi":"Sulawesi Tenggara","kasusPosi":69,"kasusSemb":15,"kasusMeni":2},
            {"fid":4,"kodeProvi":14,"provinsi":"Riau","kasusPosi":66,"kasusSemb":28,"kasusMeni":6},
            {"fid":9,"kodeProvi":18,"provinsi":"Lampung","kasusPosi":63,"kasusSemb":18,"kasusMeni":5},
            {"fid":30,"kodeProvi":76,"provinsi":"Sulawesi Barat","kasusPosi":58,"kasusSemb":5,"kasusMeni":2},
            {"fid":34,"kodeProvi":91,"provinsi":"Papua Barat","kasusPosi":53,"kasusSemb":0,"kasusMeni":1},
            {"fid":32,"kodeProvi":82,"provinsi":"Maluku Utara","kasusPosi":50,"kasusSemb":5,"kasusMeni":0},
            {"fid":5,"kodeProvi":15,"provinsi":"Jambi","kasusPosi":47,"kasusSemb":1,"kasusMeni":0},
            {"fid":25,"kodeProvi":71,"provinsi":"Sulawesi Utara","kasusPosi":45,"kasusSemb":17,"kasusMeni":4},
            {"fid":8,"kodeProvi":19,"provinsi":"Kepulauan Bangka Belitung","kasusPosi":28,"kasusSemb":4,"kasusMeni":1},
            {"fid":31,"kodeProvi":81,"provinsi":"Maluku","kasusPosi":23,"kasusSemb":12,"kasusMeni":0},
            {"fid":35,"kodeProvi":0,"provinsi":"Indonesia","kasusPosi":22,"kasusSemb":0,"kasusMeni":0},
            {"fid":29,"kodeProvi":75,"provinsi":"Gorontalo","kasusPosi":19,"kasusSemb":4,"kasusMeni":1},
            {"fid":1,"kodeProvi":11,"provinsi":"Aceh","kasusPosi":17,"kasusSemb":7,"kasusMeni":1},
            {"fid":7,"kodeProvi":17,"provinsi":"Bengkulu","kasusPosi":14,"kasusSemb":1,"kasusMeni":1},
            {
                "fid":19,
                "kodeProvi":53,
                "provinsi":"Nusa Tenggara Timur",
                "kasusPosi":12,
                "kasusSemb":1,
                "kasusMeni":0
                },
            ],
            refreshing: false
        }
    }
    
renderItem = ({item}) =>(
    <View style={{ flex:1, padding: 10, borderBottomWidth: 1, borderBottowColor: '#000'}}>
        <Text style={{fontSize: 18,fontWeight: 'bold',}}>Indonesia</Text>
    <Text  >{item.provinsi}</Text>
    <Text style={{flexDirection: 'row-reverse', backgroundColor: 'powderblue', }}>{item.kasusPosi}</Text>
    <Text style={{ backgroundColor: 'skyblue'}}>{item.kasusSemb}</Text>
    <Text style={{ backgroundColor: 'steelblue'}}>{item.kasusMeni}</Text>
    </View>

)

render(){
    
    return (
        <View>
            <FlatList
            data= {this.state.data}
            keyExtractor={item => item.fid.toString()}
            renderItem={(this.renderItem)}
            refreshing={this.state.refreshing}
            onRefresh={() => {}}
            />
        </View>
        )   
    }

}

export default List;

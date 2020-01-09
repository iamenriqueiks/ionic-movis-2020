import {Component} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {

    cardsData = [
        {
            title: 'Hola equipo',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 2',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        },
        {
            title: 'Hola equipo 3',
            subtitle: 'El agua esta bien',
            contentText: `Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Cupiditate,
            nam quidem. Adipisci aliquam eaque hic nulla
            suscipit. Assumenda atque consequuntur esse eum
             maxime mollitia obcaecati repellendus vel veritatis
             voluptate. Fugit.`
        }
    ];

    constructor(private alertController: AlertController) {
    }

    onBeerClicked() {
        console.log('quiero una no tan fria!');
    }

    openAlert() {
        this.alertController.create({
            header: 'Hello world!',
            subHeader: '¡Los baños estan mas limpios ahora!',
            buttons: [
                {
                    text: 'Cerrar',
                    handler: () => {
                        console.log('bye bye!');
                    }
                }
            ]
        }).then(alert => {
            return alert.present();
        }).then(() => {
            console.log('ya se terminó de abrir 100% seguro');
        });

    }
}

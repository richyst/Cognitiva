import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent implements OnInit {
  materias = [
    { mat: 'History' }, { mat: 'Psychology' }, { mat: 'Politics' }, { mat: 'Mathematics' }, { mat: 'Physics' },
    { mat: 'Computer' }, { mat: 'Economy' }, { mat: 'Biology' }, { mat: 'Chemistry' }, { mat: 'Reading' },
    { mat: 'Geography' }, { mat: 'Foreign languages' }, { mat: 'Medicine' }, { mat: 'Law' }];
  pasatiempos = [
    { pas: 'Art exhibitions' }, { pas: 'Religion' }, { pas: 'Countryside, outdoors' }, { pas: 'Dancing' }
    , { pas: 'Musical instruments' }, { pas: 'Writing' }, { pas: 'Passive sport' }, { pas: 'Active sport' }
    , { pas: 'Gardening' }, { pas: 'Celebrities' }, { pas: 'Celebrities' }, { pas: 'Shopping' }
    , { pas: 'Science and technology' }, { pas: 'Theatre' }, { pas: 'Fun with friends' }, { pas: 'Adrenaline sports' }
    , { pas: 'Pets' }, {pas: 'cars'}];
  miedos = [{ mie: 'Flying' }, { mie: 'Storm' }, { mie: 'Darkness' }, { mie: 'Heights' },
  { mie: 'Spiders' }, { mie: 'Snakes' }, { mie: 'Rats' }, { mie: 'Ageing' }, { mie: 'Dangerous dogs' },
  { mie: 'Fear of public speaking' }];

  frases = [{ fra: 'Healthy eating' }, { fra: 'Daily events' }, { fra: 'Prioritising workload' }, { fra: 'Writing notes' },
    { fra: 'Workaholism' }, { fra: 'Thinking ahead' }, { fra: 'Final judgement' }, { fra: 'Reliability' }];

  frases2 = [{ fra2: 'Keeping promises' }, { fra2: 'Loss of interest' }, { fra2: 'Friends versus money' }, { fra2: 'Funniness' },
    { fra2: 'Fake' }, { fra2: 'Criminal damage' }, { fra2: 'Decision making' }, { fra2: 'Elections' }];

  frases3 = [{ fra3: 'Self-criticism' }, { fra3: 'Judgement calls' }, { fra3: 'Hypochondria' }, { fra3: 'Empathy' },
    { fra3: 'Eating to survive' }, { fra3: 'Giving' }, { fra3: 'Compassion to animals' }, { fra3: 'Borrowed stuff' }];

  frases4 = [{ fra4: 'Loneliness' }, { fra4: 'Cheating in school' }, { fra4: 'Health' }, { fra4: 'Changing the past' },
    { fra4: 'God' }, { fra4: 'Dreams' }, { fra4: 'Charity' }, { fra4: 'Number of friends' }];

  importantes = [{ imp: 'Waiting' }, { imp: 'New environmentg' }, { imp: 'Mood swings' }, { imp: 'Appearance and gestures' }, { imp: 'Socializing' },
    { imp: 'Achievements' }, { imp: 'Responding to a serioues letter' }];

  importantes2 = [{ imp: 'Children' }, { imp: 'Assertiveness' }, { imp: 'Getting angry' }, { imp: 'Knowing the right people' }, { imp: 'Public speaking' },
    { imp: 'Unpopularity' }, { imp: 'Life struggles' }];

  importantes3 = [{ imp: 'Happiness in life' }, { imp: 'Energy levels' }, { imp: 'Small dogs' }, { imp: '  Big dogs' }, { imp: 'Personality' },
    { imp: 'Finding lost valuables' }, { imp: 'Getting up' }, { imp: 'Interests or hobbies' }, { imp: 'Parent\'s advice' }, { imp: 'Questionnaires or polls' }];


  cuest = {
    numMusica1: '',
    musica2: '',
    musica3: '',
    musica4: '',
    numPeliculas: '',
    peliculas6: '',
    peliculas7: '',
    materiaFav8: [],
    pasatiempo9: [],
    miedo10: [],
    beber11: '',
    fumar12: '',
    frase13: [],
    frase14: [],
    frase15: [],
    frase16: [],
    puntual17: '',
    mientes18: '',
    importante19: [],
    importante20: [],
    importante21: [],
    internet22: ''
  };

  constructor() { }

  print() {
    console.log(this.cuest);
  }


  ngOnInit() {
  }

  send(){
    console.log(this.cuest);
    alert('Enviado');
  }

}

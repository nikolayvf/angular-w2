import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  public index = 0;

  public tempBook;
  public tempDescription;
  public tempAuthor;
  public tempRating;

  public bookCollection = [
    {
      book: 'Хитър Петър',
      description:
        'Остроумие, шеги, но и мъдрост бликат от всички истории, в които главен участник е народният герой Хитър Петър. Магаре боб яде ли? Да, в Тенджера града, където царува цар Патаран. То там и рибите говорят, зайците ги използват за пощенски куриери. В морето пък си ловят по цели стада овце. Който се съмнява, да пита Хитър Петър. Торбата му с лъжите е отворена. А както този неизчерпаем шегобиец е доказал, лапнишарани не липсват по белия свят.',
      author: 'Сава Попов',
      rating: 3.4,
    },
    {
      book: 'Атомни навици',
      description:
        'Независимо дали сте лидер, който иска най-доброто за екипа си, атлет, който се готви за състезание, или просто човек, който не може да откаже цигарите, да свали някой килограм или да намали стреса в живота си – тази книга ще ви помогне да постигнете целите си стъпка по стъпка.',
      author: 'Джеймс Клиър',
      rating: 3.4,
    },
    {
      book: 'Последният ерген милиардер',
      description:
        'Забавна романтична комедия, в която ще се запознаем с една жена, която не се вслушва в здравия разум, с един мъж, който не слуша сърцето си, и с най-сладкото куче, което някога е играло ролята на сватовник.',
      author: 'Пипа Грант',
      rating: 4.4,
    },
    {
      book: 'Холи',
      description:
        'Холи не ми излизаше от ума. Тя трябваше да е епизодичен герой в „Мистър Мерцедес“, но някак си привлече вниманието ми и спечели сърцето ми. Холи е неповторима. - СТИВЪН КИНГ',
      author: 'Стивън Кинг',
      rating: 4.8,
    },
    {
      book: '1984',
      description:
        '„1984” е безспорно най-важният роман, писан през XX век, чиято стойност само нараства с всеки ден след публикуването му през 1949 г. Антиутопичният свят, който Оруел рисува, е естествено продължение на идеите от алегоричната приказка „Фермата на животните”, насочени към разкриване на опасността от тоталитарното управление.',
      author: 'Джордж Оруел',
      rating: 3.4,
    },
  ];

  public processPrevBook() {
    this.index--;

    if (this.index < 0) {
      this.index = this.bookCollection.length - 1;
    }

    this.resetTempData();
  }

  public processNextBook() {
    this.index++;

    if (this.index >= this.bookCollection.length) {
      this.index = 0;
    }

    this.resetTempData();
  }

  public processInputBookBook(input) {
    // this.tempBook = input.target.value;
    this.tempBook = input.target;
  }

  public processInputBookDescription(input) {
    // this.tempDescription = input.target.value;
    this.tempDescription = input.target;
  }

  public processInputBookAuthor(input) {
    // this.tempAuthor = input.target.value;
    this.tempAuthor = input.target;
  }

  public processInputBookRating(event) {
    this.tempRating = parseFloat(event.target.value);
    console.log(this.tempRating);
    // ddd
  }

  public showRating(rating) {
    let starRating = '';
    for (let index = 0; index < Math.ceil(rating); index++) {
      starRating += '⭐️';
    }
    return starRating;
  }

  public processSaveBookData() {
    this.bookCollection[this.index].book = this.tempBook.value;
    this.bookCollection[this.index].description = this.tempDescription.value;
    this.bookCollection[this.index].author = this.tempAuthor.value;
    this.bookCollection[this.index].rating = this.tempRating.value;
  }

  private resetTempData() {
    // this.tempTitle  = '';
    // this.tempNote   = '';

    this.tempBook.value = '';
    this.tempDescription.value = '';
    this.tempAuthor.value = '';
    this.tempRating.value = '';
  }
}

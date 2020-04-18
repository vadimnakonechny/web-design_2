export class Dictionary {
  constructor() {
    this.map = new Map();
  }

  addingWord = (word, translation) => {
    if (typeof word === 'string' && word.length > 0) {
      let values;

      switch (typeof translation) {
        case 'string':
          if (translation.length > 0) {
            values = [translation];
          } else {
            throw new Error('$translation should be a non-empty string');
          }
          break;
        case 'object':
          if (Array.isArray(translation)) {
            values = translation.filter(e => typeof e === 'string');
          } else if (translation instanceof Set) {
            values = [...translation.values()].filter(e => typeof e === 'string');
          } else {
            throw new Error('$translation should be Set or Array');
          }
          break;
        default:
          throw new Error('$translation doesnt contain any string values');
      }

      if (values && Array.isArray(values) && values.length > 0) {
        const set = this.map.get(word);
        set ? values.forEach(value => set.add(value)) : this.map.set(word, new Set(values));
      } else {
        throw new Error('$translation doesnt contain any string values');
      }
    } else {
      throw new Error('$word should be a non-empty string');
    }
  }

  deleteTranslation = (word, translation) => this.map.get(word).delete(translation);

  deleteWord = word => this.map.delete(word);

  editedWord = (word, newWord, newTranslation) => {
    this.map.delete(word);
    this.addingWord(newWord, newTranslation);
  }

  editTranslation = (word, translation, newTranslation) => {
    this.map.get(word).delete(translation);
    this.map.get(word).add(newTranslation);
  }
}

const dictionary = new Dictionary();

// заполняем значениями
dictionary.addingWord('list', ['список', 'перелік']);
dictionary.addingWord('file', ['файл', 'справа']);
dictionary.addingWord('bread', 'хліб');
dictionary.addingWord('great', ['великий', 'великий', 'відмінний']);
dictionary.addingWord('happy', 'щасливий');
dictionary.addingWord('come', ['приходити', 'приїхати', 'приїжджати']);
dictionary.addingWord('our', 'наш');
dictionary.addingWord('way', ['шлях', 'спосіб', 'шлях']);
dictionary.addingWord('very', ['дуже', 'самий']);
dictionary.addingWord('a lot of', ['багато', 'безліч', 'маса']);
dictionary.addingWord('lucky', 'везучий');
dictionary.addingWord('air', 'повітря');
dictionary.addingWord('sir', ['сер', 'пан']);
dictionary.addingWord('woman', 'жінка');
dictionary.addingWord('under', ['під', 'по', 'при']);
dictionary.addingWord('see', ['бачити', 'побачити', 'дивитися', 'подивитися']);
dictionary.addingWord('yes', 'да');
dictionary.addingWord('then', ['тоді', 'потім', 'потім']);
dictionary.addingWord('some', ['деякі', 'кілька']);
dictionary.addingWord('some', 'той же самий');
dictionary.addingWord('because', ['тому як', 'тому що', 'при']);
dictionary.addingWord('thank', ['Спасибі', 'дякувати', 'дякувати ']);
dictionary.addingWord('world', new Set(['світ', 'світло', 'всесвіт']));
dictionary.addingWord('speak', new Set(['говорити', 'виступати', 'розмовляти']));
dictionary.addingWord('game', new Set(['гра', 'партія']));
dictionary.addingWord('work', 'працювати');
dictionary.addingWord('name', ['ім\'я', 'название', 'наименование']);
dictionary.addingWord('set', ['задавати', 'набір', 'комплект']);

export default dictionary;

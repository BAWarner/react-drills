import React, {Component} from 'react';
import Image from './components/Image';

class App extends Component{
  constructor(){
    super();
    this.state = {
      imageArray: [
        {
          imageSource: 'https://imgix.ranker.com/user_node_img/50053/1001040559/original/1-freestyle-list-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
          imageAlt: 'Fox'
        },
        {
          imageSource: 'https://i.guim.co.uk/img/static/sys-images/Guardian/Pix/pictures/2014/9/12/1410522211055/2e8a373e-4554-45d9-bfc7-03e3608a2dc1-1360x2040.jpeg?width=300&quality=85&auto=format&fit=max&s=cfedc40da96100251f69cc1ac78999ad',
          imageAlt: 'Bear'
        },
        {
          imageSource: 'https://images.boredomfiles.com/wp-content/uploads/2014/05/bad-taxidemy-1.jpg',
          imageAlt: 'Wolverine'
        },
      ]
    };
  }
  render(){
    var images = this.state.imageArray.map(
      (val, i) => {
        let {imageSource, imageAlt} = val;
        return <Image
          key={`image${i}`}
          imageSource={imageSource}
          imageAlt={imageAlt}
        />
      }
    );
    return(
      <div>
        {images}
      </div>
    );
  }
}

export default App;
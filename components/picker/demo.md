# Picker 选择器



## 基本用法
```jsx
import { Cell, Button, Picker, Toast } from 'zarm';

const SINGLE_DATA = [
  { value: '1', label: '选项一' },
  { value: '2', label: '选项二' },
];

// 普通多列数据
const MULTI_DATA = [
  [
    { value: '1', label: '选项一' },
    { value: '2', label: '选项二' },
  ],
  [
    { value: '3', label: '选项A' },
    { value: '4', label: '选项B' },
  ],
];

// 级联数据
const CASCADE_DATA = [
  {
    code: '1',
    label: '北京市',
    children: [
      { code: '11', label: '海淀区' },
      { code: '12', label: '西城区' },
    ],
  },
  {
    code: '2',
    label: '上海市',
    children: [
      { code: '21', label: '杨浦区' },
      { code: '22', label: '静安区' },
    ],
  },
];

const DIY_DATA = [
  {
    value: '1',
    name: '北京市',
    children: [
      { value: '11', name: '海淀区' },
      { value: '12', name: '西城区' },
    ],
  },
  {
    value: '2',
    name: '上海市',
    children: [
      { value: '21', name: '黄埔区' },
      { value: '22', name: '虹口区' },
    ],
  },
];

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      single: {
        visible: false,
        value: '',
        dataSource: SINGLE_DATA,
      },
      multi: {
        visible: false,
        value: [],
        dataSource: MULTI_DATA,
      },
      cascade: {
        visible: false,
        value: [],
        dataSource: [],
      },
      diy: {
        visible: false,
        value: [],
        dataSource: DIY_DATA,
      },
    };
  }

  componentDidMount() {
    // 异步加载数据源测试
    setTimeout(() => {
      const { cascade } = this.state;

      cascade.dataSource = CASCADE_DATA;
      cascade.value = ['1', '12'];
      cascade.valueMember = "code";
      this.setState({ cascade });
    }, 0);
  }

  toggle(key) {
    const state = this.state[key];
    state.visible = !state.visible;
    this.setState({ [`${key}`]: state });
  }

  render() {
    const {
      single,
      multi,
      cascade,
      diy,
    } = this.state;

    return (
      <div>
        <Cell
          description={
            <Button size="xs" onClick={() => this.toggle('single')}>选择</Button>
          }
        >
          单列
        </Cell>

        <Cell
          description={
            <Button size="xs" onClick={() => this.toggle('multi')}>选择</Button>
          }
        >
          多列
        </Cell>

        <Cell
          description={
            <Button size="xs" onClick={() => this.toggle('cascade')}>选择</Button>
          }
        >
          级联
        </Cell>

        <Cell
          description={
            <Button size="xs" onClick={() => this.toggle('diy')}>选择</Button>
          }
        >
          自定义
        </Cell>

        <Picker
          visible={single.visible}
          value={single.value}
          dataSource={single.dataSource}
          onOk={(selected) => {
            console.log('Picker onOk: ', selected);
            single.value = selected.map(item => item.value);
            this.setState({ single });
            Toast.show(JSON.stringify(selected));
            this.toggle('single');
          }}
          onCancel={() => this.toggle('single')}
        />

        <Picker
          visible={multi.visible}
          value={multi.value}
          dataSource={multi.dataSource}
          onOk={(selected) => {
            console.log('Picker onOk: ', selected);
            multi.value = selected.map(item => item.value);
            this.setState({ multi });
            Toast.show(JSON.stringify(selected));
            this.toggle('multi');
          }}
          onCancel={() => this.toggle('multi')}
        />

        <Picker
          visible={cascade.visible}
          value={cascade.value}
          dataSource={cascade.dataSource}
          valueMember={cascade.valueMember}
          onOk={(selected) => {
            console.log('Picker onOk: ', selected);
            cascade.value = selected.map(item => item.code);
            this.setState({ cascade });
            Toast.show(JSON.stringify(selected));
            this.toggle('cascade');
          }}
          onCancel={() => this.toggle('cascade')}
        />

        <Picker
          visible={diy.visible}
          title="custom title"
          cancelText="Cancel"
          okText="Ok"
          dataSource={diy.dataSource}
          value={diy.value}
          valueMember="value"
          itemRender={data => data.name}
          onOk={(selected) => {
            console.log('Picker onOk: ', selected);
            diy.value = selected.map(item => item.value);
            this.setState({
              diy,
            });
            Toast.show(JSON.stringify(selected));
            this.toggle('diy');
          }}
          onCancel={() => this.toggle('diy')}
        />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## Select 表单选择器
```jsx
import { Select, Cell } from 'zarm';

// 级联数据
const CASCADE_DATA = [
  {
    value: '1',
    label: '北京市',
    children: [
      { value: '11', label: '海淀区' },
      { value: '12', label: '西城区' },
    ],
  },
  {
    value: '2',
    label: '上海市',
    children: [
      { value: '21', label: '杨浦区' },
      { value: '22', label: '静安区' },
    ],
  },
];

class Demo extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        visible: false,
        value: [],
        dataSource: [],
      };
  }

  componentDidMount() {
    // 异步加载数据源测试
    setTimeout(() => {
      this.setState({
        dataSource: CASCADE_DATA,
        value: ['1', '12'],
      });
    }, 0);
  }

  render() {
    const { visible, value, dataSource } = this.state;
    return (
      <div>
        <Cell hasArrow title="城市">
          <Select
            visible={visible}
            value={value}
            dataSource={dataSource}
            onOk={(selected) => {
              console.log('Select onOk: ', selected);
              this.setState({
                value: selected.map(item => item.value),
              });
            }}
            onMaskClick={() => {
              this.setState({
                visible: false,
              });
            }}
          />
        </Cell>
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## PickerView 平铺选择器
```jsx
import { PickerView } from 'zarm';

// 级联数据
const CASCADE_DATA = [
  {
    code: '1',
    label: '北京市',
    children: [
      { code: '11', label: '海淀区' },
      { code: '12', label: '西城区' },
    ],
  },
  {
    code: '2',
    label: '上海市',
    children: [
      { code: '21', label: '杨浦区' },
      { code: '22', label: '静安区' },
    ],
  },
];

class Demo extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: [],
      dataSource: CASCADE_DATA,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        value: ['1', '12'],
        dataSource: [
          {
            code: '1',
            label: '北京市',
            children: [
              { code: '11', label: '海淀区' },
              { code: '12', label: '西城区' },
            ],
          },
          {
            code: '2',
            label: '上海市',
            children: [
              { code: '21', label: '杨浦区' },
              { code: '22', label: '静安区' },
            ],
          },
        ],
        valueMember: 'code'
      })
    })
  }

  render() {
    return (
      <div>
        <PickerView
          value={this.state.value}
          valueMember="code"
          dataSource={this.state.dataSource}
          onChange={selected => console.log('PickerView onChange: ', selected)}
        />
      </div>
    )
  }
}

ReactDOM.render(<Demo />, mountNode);
```



## API

| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| dataSource | object[] | [] | 数据源 |
| value | string &#124; string[] &#124; number[] | - | 值 |
| defaultValue | string &#124; string[] &#124; number[] | - | 初始值 |
| valueMember | string | 'value' | 值字段对应的key 
| itemRender | (data?: object) => data.label | (data?: object) => data.label | 单个选项的展示 |
| disabled | boolean | false | 是否禁用 |
| cols | number | Infinity | 级联选择器的级数 |
| onChange | (selected?: object) => void | - | 值变化时触发的回调函数 |

### 仅 Picker & Select 支持的属性
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| visible | boolean | false | 是否展示 |
| title | string | '请选择' | 选择器标题 |
| okText | string | '确定' | 确定栏文字 |
| cancelText | string | '取消' | 取消栏文字 |
| onOk | (selected?: object) => void | - | 点击确定时触发的回调函数 |
| onCancel | () => void | - | 点击取消时触发的回调函数 |
| onMaskClick | () => void | - | 点击遮罩层时触发的回调函数 |

### 仅 Select 支持的属性
| 属性 | 类型 | 默认值 | 说明 |
| :--- | :--- | :--- | :--- |
| placeholder | string | '请选择' | 输入提示信息 |
| displayRender | (selected?: object) => string | selected => selected.map(item => item.label) | 所选值的展示 |

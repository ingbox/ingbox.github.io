---
layout: single
title: "Python_리스트 컴프리헨션(List Comprehension)"
categories:
  - py
---

<style>
img.aligncenter_sizedown{display:block;margin:0 auto;  width: 300px;height: 300px;}
img.aligncenter{display:block;margin:0 auto;}
  </style>

## 서론

우연히 백준에서 파이썬 문제를 풀다가 의문이 생겨서 정리를 한다<br>
 
```py
[x for x in range(10)]
```
라는 코드를 본 적이 있을 것이다<br>
이를 List Comprehension이라고 부르는데 뜻을 보자<br>

<hl>"List : 배열 <br>Comprehension : 이해력 ???"</hl>
<br> 
Comprehension을 찾아보니까 우리가 배워서 알고있는 뜻이랑은 다르다<br>
<u>배열 이해</u> 뭔가 와 닿지 않는다 <font size=2> 당연하다 이렇게 해석하면 안되기 때문이다</font><br>
구글링을 통해서 알아본 결과<br>미국에서는 코딩할 때 Comprehension이라는 단어를 많이 쓴다고 한다<br>

Comprehension은 무언가를 구성하는 행위나 과정이라고 한다<br> 
그래서 List Comprehension은 List를 만드는 일 정도로 보면 된다<br>



<br>
시작하기에 앞서 [<span id="mus">PinkLAB</span>](https://www.youtube.com/watch?v=XXYdyufZmoQ)님의 유튜브 채널을 Clone Coding하고<br>
개념적인 내용을 더 첨부하려고 한다.


## 시작해보자

먼저 해당 코드가 업로드 된 [<span id="mus">Github 주소</span>](https://github.com/ingbox/BLTN)이다.<br>
Jupyter 환경에서 Coding 하였으며 numpy, librosa, matplotlib를 사용하였다.<br>


<daon>pip install librosa<br>
pip install numpy</daon>
<br>

## 코드
### 도(DO), 미(MI), 솔(SOL) 파형 출력
```py
# import 부분
import librosa.display, librosa
import IPython.display
import warnings
import numpy as np
import matplotlib.pyplot as plt
warnings.simplefilter("ignore")
```

```py
sr = 22 * 1000
ts = 1/sr # 1 주기
time = np.arange(0, 1, ts) # [start, stop, step)
# 주파수을 22000Hz로 가로 22000 등분
```


time을 출력해보면 아래와 같은 결과가 나온다
> array([0.00000000e+00, 4.54545455e-05, 9.09090909e-05, ...,
> 9.99863636e-01, 9.99909091e-01, 9.99954545e-01])<br>
> 22000등분한 x 좌표가 나온다.

<br>

```py
def sin_wave(amp, freq, time):
    return amp * np.sin(2 * np.pi * freq * time)
```

* amp는 진폭
* 2π * 주파수 = 1초에 주기가 몇 번 반복되는 지
* time은 Θ를 구하기 위해서

```py
DO = sin_wave(1, 261.6256, time)
MI = sin_wave(1, 329.6267, time)
SOL = sin_wave(1, 391.9954, time)

plt.figure(figsize=(12, 5))
plt.plot(time, DO, label='DO', color = 'red')
plt.plot(time, MI, label='MI', color = 'blue')
plt.plot(time, SOL, label='SOL', color = 'green')
plt.xlim(0, 0.05)
plt.legend()
plt.grid()
plt.show()
```

음계의 주파수를 참고하여 sin 그래프를 그려보자.

![](/assets/images/posting/py_220428/picture1.jpg){:.aligncenter}


주파수가 높을수록 1주기의 길이가 짧아지는 것을 알수 있다.<br>
즉, 1초에 진동하는 속도가 빠를 수록 높은 소리가 난다.<br>

```py
IPython.display.Audio(data=SOL, rate=sr)
```
Jupyter 환경에서 해당 파형의 소리를 확인해보자.<br> 


### 젓가락 행진곡의 음정을 분석해보자

모든 코드를 업로드하면 저작권의 문제가 있을 수 있으므로,<br>
stft를 사용하여 시간별 주파수를 알아내는 법으로<br>
더 나아가 librosa에서 제공하는 Chroma 기법을 통해서 시간별 음정을 얻어낼 수 있다.<br>
방법은 위의 업로드 된 유트브 링크를 확인해보자.<br>

여기서 stft의 원리를 간단히 요약하자면,<br>
푸리에 변환을 사용하여 각 음계에 해당하는 특정 주파수를 얻어내는 방법이다.<br>

![](/assets/images/posting/py_220428/picture2.jpg){:.aligncenter}
![](/assets/images/posting/py_220428/picture3.jpg){:.aligncenter}

sin 또는 cos 그래프를 원 위에 표현하는 방법을 사용하면 위와 같은 그래프로 표현이된다.<br>
여기에 진동수의 간격을 줄일 수록 1초에 회전해야하는 그래프의 바퀴 수가 늘어나게 된다.<br>
[<span id="mus">유튜브 링크</span>](https://www.youtube.com/watch?v=Mc9PHZ3H36M)를 참고해서 이론을 알고 싶다면 확인해보자.<br>

이렇게 감긴 그래프에서 대부분의 무게 중심은 그래프의 원점에 가까이 있는데 <br>
오른쪽에 치우치게 되는 구간이 생긴다.<br>
해당 그래프의 Hz 수만큼의 바퀴 수 일 때다 그렇게 시간별로<br>
해당 그래프를 그릴 수 있는 수식을 사용해서<br>
무게 중심을 확인한다음, 무게 중심이 치우치게 되는 구간을 해당 시간대의 주파수로 추출할 수 있다.<br>

![](/assets/images/posting/py_220428/picture4.jpg){:.aligncenter}
<br>
![](/assets/images/posting/py_220428/picture5.jpg){:.aligncenter}

만약 두 음정이 합성되어 있다면, 무게 중심이 치우치게 되는 구간이 두 번 나타나게 된다.<br> 
그 두 구간이 음정에 해당하는 Hz가 된다.<br> 

푸리에 변환을 통해 추출된 결과에서 특정 주파수를 제거하고<br>
다시 푸리에 변환을 실시하면(역 푸리에 변환) 해당 주파수가 빠진<br>
잘 사용한다면 잡음을 제거한 Audio를 만들 수 있다.<br>

```py
chopstick, sr = librosa.core.load('test_sound.wav') # 젓가락 행진곡

draw_chroma(chopstick, sr) # Chroma 분석
```
![](/assets/images/posting/py_220428/picture6.jpg){:.aligncenter}



## 마무리
이를 통해 소리를 어떻게 분석하는지<br>
주파수의 의미, sr의 의미 등등 알게 되었다.<br>

다음에는 wav를 Spectrogram으로 변환하고 왜 그렇게 되는지에 대해서 알아보고자 한다.
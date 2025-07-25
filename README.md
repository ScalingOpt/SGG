<div align="center">
<h1>[ACL'25 Main] Taming LLMs by Scaling Learning Rates <br> with Gradient Grouping</h1>

<a href="https://arxiv.org/pdf/2506.01049" target="_blank" rel="noopener noreferrer">
  <img src="https://img.shields.io/badge/Paper-SGG" alt="Paper PDF">
</a>
<a href="https://arxiv.org/abs/2506.01049"><img src="https://img.shields.io/badge/arXiv-2506.01049-b31b1b" alt="arXiv"></a>
<a href="https://scalingopt.github.io/SGG/"><img src="https://img.shields.io/badge/Project_Page-green" alt="Project Page"></a>
<a href='https://huggingface.co/papers/2506.01049'><img src='https://img.shields.io/badge/%F0%9F%A4%97%20Hugging%20Face-DailyPapers Top4-blue'></a>

[Siyuan Li*](https://lupin1998.github.io), [Juanxi Tian*](https://github.com/tianshijing), [Zedong Wang*](https://jacky1128.github.io), [Xin Jin](https://jinxins.github.io), [Zicheng Liu](https://scholar.google.com/citations?hl=en&user=EwMGZsgAAAAJ), [Wentao&nbsp;Zhang](https://zwt233.github.io), [Dan Xu](https://www.danxurgb.net)

**[Zhejiang University](https://www.zju.edu.cn/english/)**; **[Westlake University](https://en.westlake.edu.cn)**; **[HKUST](https://hkust.edu.hk)**; **[Peking University](https://english.pku.edu.cn)**

</div>

<p align="center">
  <img src="figures/SGG_1.png" width="70%"/>
  <br>
  <em>
    SGG with online grouping and group-specific learning rate (LR) scaling upon adaptive LR optimizers.
  </em>
</p>

## Abstract

Training large language models (LLMs) poses challenges due to their massive scale and heterogeneous architectures. While adaptive optimizers like AdamW help address gradient variations, they still struggle with efficient and effective parameter-wise learning rate estimation, resulting in training instability, slow convergence, and poor compatibility with parameter-efficient fine-tuning (PEFT) techniques. This work introduces **Scaling with Gradient Grouping (SGG)**, an optimizer wrapper that improves adaptive learning rate estimation by dynamic grouping and group-specific scaling. SGG first groups gradient statistics in each layer into clusters and then applies cluster-specific scaling to calibrate learning rates for each parameter, thus imposing collective group-wise constraints while maintaining precise per-parameter adaptation. Experiments on diverse (M)LLM benchmarks show that SGG integrates seamlessly with existing optimizers, and offers consistent gains and faster convergence over baselines, with various model sizes. Its stability across varying batch sizes and learning rates establishes SGG as a robust choice for LLM optimization.

## Method Overview

**Scaling with Gradient Grouping (SGG)** enhances adaptive optimizers by introducing a drop-in two-step process within each optimization step:

* **Online Gradient Grouping:** For each layer, SGG clusters parameters based on the magnitude of their gradient statistics (e.g., second-moment estimates). This ensures that parameters with similarly-sized gradients are updated collectively.

* **Group-wise LR Scaling:** SGG then computes a distinct scaling factor for each group and applies it to the learning rates of all parameters within that group. This calibration imposes a group-wise constraint that stabilizes training and accelerates convergence.


## BibTeX

```bibtex
@inproceedings{acl2025sgg,
     title={Taming LLMs with Gradient Grouping},
     author={Li, Siyuan and Tian, Juanxi and Wang, Zedong and Jin, Xin and Liu, Zicheng and Zhang, Wentao and Xu, Dan},
     booktitle={Annual Meeting of the Association for Computational Linguistics},
     year={2025}
  }

@article{acl2025sgg,
  title={Taming LLMs by Scaling Learning Rates with Gradient Grouping},
  author={Li, Siyuan and Tian, Juanxi and Wang, Zedong and Jin, Xin and Liu, Zicheng and Zhang, Wentao and Xu, Dan},
  journal={arXiv preprint arXiv:2506.01049},
  year={2025}
}
```

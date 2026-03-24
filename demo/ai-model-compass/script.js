const modelData = [
  {
    "id": "gpt-5-o3",
    "name": "GPT-5 / o3",
    "developer": "OpenAI",
    "region": "Global",
    "strengths": ["强化推理 (o3)", "深度逻辑", "拟人化交互"],
    "context": "128k+",
    "reasoning": "巅峰 (Reasoning)",
    "best_for": "前沿科研, 科学竞赛, 复杂工程, 战略咨询",
    "description": "o3 在数学证明和复杂工程规划上具备专家深度；GPT-5 引入深层情感理解，交互更拟人。"
  },
  {
    "id": "gemini-3-1",
    "name": "Gemini 3.1 Pro / Ultra",
    "developer": "Google",
    "region": "Global",
    "strengths": ["3M+ 上下文", "全生态集成", "原生多模态"],
    "context": "3M+ Tokens",
    "reasoning": "极强 (Ultra)",
    "best_for": "海量视频分析, 大型企业知识库, 跨应用调度",
    "description": "原生支持 300 万+ 上下文，处理数十小时视频无压力，深度打通 Google 生态。"
  },
  {
    "id": "claude-4-6",
    "name": "Claude 4.6 (Sonnet/Opus)",
    "developer": "Anthropic",
    "region": "Global",
    "strengths": ["Computer Use 2.0", "低幻觉率", "代码黄金标准"],
    "context": "200k+",
    "reasoning": "顶级 (Opus)",
    "best_for": "全自动软件开发, 专业文案, 法律文书审核",
    "description": "Computer Use 2.0 实现全自动计算机操作；在严谨文本领域事实准确性领先。"
  },
  {
    "id": "llama-4",
    "name": "Llama 4",
    "developer": "Meta",
    "region": "Global",
    "strengths": ["开源战力天花板", "400B+ 参数", "边缘侧优化"],
    "context": "128k+",
    "reasoning": "顶级 (405B+)",
    "best_for": "企业私有化部署, 学术研究, 端侧硬件集成",
    "description": "400B+ 参数性能对标 GPT-5；轻量化版本广泛应用于手机等智能硬件。"
  },
  {
    "id": "deepseek-v3-2",
    "name": "DeepSeek-V3.2 / R1-Full",
    "developer": "深度求索",
    "region": "China",
    "strengths": ["极致性价比", "推理平替", "算力效率革命"],
    "context": "128k+",
    "reasoning": "顶级 (R1-Full)",
    "best_for": "高频逻辑调用, 数学建模, 低成本 Agent",
    "description": "R1-Full 在复杂推理上对标 OpenAI o 系列，但 Token 成本仅为其几分之一。"
  },
  {
    "id": "qwen-3-0",
    "name": "通义千问 3.0",
    "developer": "阿里巴巴",
    "region": "China",
    "strengths": ["中文语境标杆", "开源领跑", "多模态均衡"],
    "context": "128k+",
    "reasoning": "极强 (Flagship)",
    "best_for": "全场景业务集成, 中文营销, 电商智能助手",
    "description": "综合实力最强的国产模型之一，MMLU 榜单前五，中文处理能力行业公认标杆。"
  },
  {
    "id": "glm-5",
    "name": "智谱 GLM-5",
    "developer": "智谱 AI",
    "region": "China",
    "strengths": ["学院派巅峰", "AI for Science", "成熟 Agent 生态"],
    "context": "128k+",
    "reasoning": "极强 (Scientific)",
    "best_for": "生物医药推演, 物理建模, 复杂指令执行",
    "description": "在科学领域表现卓越，具备极强逻辑严谨性；拥有国内最成熟的智能体平台。"
  },
  {
    "id": "ernie-5-0",
    "name": "文心一言 5.0",
    "developer": "百度",
    "region": "China",
    "strengths": ["搜索深度融合", "政企生态霸主", "事实核查"],
    "context": "128k+",
    "reasoning": "强 (Enterprise)",
    "best_for": "企业级知识库, 政务自动化, 实时信息检索",
    "description": "实时接入百度搜索数据，时效性强；在金融、政务等领域市场份额领先。"
  },
  {
    "id": "kimi-2-0",
    "name": "Kimi 2.0",
    "developer": "月之暗面",
    "region": "China",
    "strengths": ["10M+ 上下文", "深度调研神器", "跨文档分析"],
    "context": "10M+ Tokens",
    "reasoning": "强 (Long-context)",
    "best_for": "长篇文献阅读, 财报对比, 深度行业调研",
    "description": "上下文扩展至千万级，支持数百份文件跨文档分析；网页总结与逻辑梳理极佳。"
  },
  {
    "id": "doubao-max",
    "name": "豆包 (Doubao-Max)",
    "developer": "字节跳动",
    "region": "China",
    "strengths": ["日活第一", "语音交互巅峰", "情感陪伴"],
    "context": "128k+",
    "reasoning": "中强 (C-End)",
    "best_for": "日常百科咨询, 情感陪伴, 职场周报生成",
    "description": "DAU 稳居国内第一；语音拟人化程度极高，深度集成于抖音、飞书全生态。"
  }
];

let currentFilter = 'All';
let currentSearch = '';

function render() {
    const filtered = modelData.filter(m => {
        const matchesRegion = currentFilter === 'All' || m.region === currentFilter;
        const matchesSearch = m.name.toLowerCase().includes(currentSearch.toLowerCase()) || 
                              m.developer.toLowerCase().includes(currentSearch.toLowerCase()) ||
                              m.strengths.some(s => s.toLowerCase().includes(currentSearch.toLowerCase()));
        return matchesRegion && matchesSearch;
    });

    const modelCountEl = document.getElementById('modelCount');
    if (modelCountEl) modelCountEl.innerText = filtered.length;

    // Render Table
    const tableBody = document.getElementById('tableBody');
    if (tableBody) {
        tableBody.innerHTML = filtered.map(m => `
            <tr class="hover:bg-gray-50/50 transition-colors">
                <td class="px-6 py-4">
                    <div class="flex flex-col">
                        <span class="font-bold text-gray-900">${m.name}</span>
                        <span class="text-[10px] text-gray-400 uppercase tracking-wider">${m.developer}</span>
                    </div>
                </td>
                <td class="px-6 py-4">
                    <span class="px-2 py-0.5 rounded-full text-[10px] font-bold ${m.reasoning.includes('顶级') || m.reasoning.includes('巅峰') ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}">
                        ${m.reasoning}
                    </span>
                </td>
                <td class="px-6 py-4 text-xs text-gray-600 font-mono">${m.context}</td>
                <td class="px-6 py-4">
                    <div class="flex flex-wrap gap-1">
                        ${m.strengths.map(s => `<span class="text-[10px] px-1.5 py-0.5 bg-gray-100 text-gray-500 rounded">${s}</span>`).join('')}
                    </div>
                </td>
                <td class="px-6 py-4 text-xs text-gray-500 italic">${m.best_for}</td>
            </tr>
        `).join('');
    }

    // Render Grid
    const gridView = document.getElementById('gridView');
    if (gridView) {
        gridView.innerHTML = filtered.map(m => `
            <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all group relative overflow-hidden">
                <div class="absolute top-0 right-0 px-3 py-1 text-[9px] font-black uppercase tracking-widest ${m.region === 'Global' ? 'bg-blue-600 text-white' : 'bg-emerald-600 text-white'}">
                    ${m.region}
                </div>
                <div class="mb-4">
                    <h3 class="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">${m.name}</h3>
                    <p class="text-xs text-gray-400 font-medium">${m.developer}</p>
                </div>
                <p class="text-sm text-gray-600 mb-6 leading-relaxed">${m.description}</p>
                <div class="space-y-3 pt-4 border-t border-gray-50">
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">推理等级</span>
                        <span class="text-xs font-bold text-blue-600">${m.reasoning}</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">上下文</span>
                        <span class="text-xs font-mono font-bold text-gray-900">${m.context}</span>
                    </div>
                    <div class="pt-2">
                        <div class="flex flex-wrap gap-1.5">
                            ${m.strengths.map(s => `<span class="px-2 py-0.5 bg-gray-50 text-gray-500 rounded text-[10px] font-medium border border-gray-100">${s}</span>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

window.filterByRegion = function(region) {
    currentFilter = region;
    document.querySelectorAll('.filter-btn').forEach(btn => {
        if (btn.getAttribute('data-region') === region) {
            btn.classList.add('bg-white', 'shadow-sm', 'text-blue-600');
            btn.classList.remove('text-gray-600');
        } else {
            btn.classList.remove('bg-white', 'shadow-sm', 'text-blue-600');
            btn.classList.add('text-gray-600');
        }
    });
    render();
}

const searchInput = document.getElementById('searchInput');
if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        render();
    });
}

// Initial render
document.addEventListener('DOMContentLoaded', render);

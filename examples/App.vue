<script lang="ts" setup>
import { ThEarth, ThEarthBeam, ThEarthBorder, ThEarthLine } from 'three-earth/packages/components'

const lineData = [
    {
        fromName: '北京市',
        toName: '成都市',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                104.069008,
                30.692721
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '成都市',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                69.35232,
                29.992654
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '俄罗斯',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                55.811909,
                29.349968
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '哈萨克斯坦',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                67.624124,
                51.51139
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '斯里兰卡',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                80.722999,
                6.965254
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '伊朗',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                54.966783,
                29.305632
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '阿富汗',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                63.944664,
                31.600671
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '也门',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                63.944664,
                31.600671
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '索马里',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                63.944664,
                31.600671
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '印度',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                77.190718,
                23.068824
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '昆明',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                102.940035,
                24.676079
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '上海',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                121.558099,
                31.174529
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '柬埔寨',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                104.595791,
                13.791745
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '缅甸',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                95.323554,
                21.269557
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '新加坡',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                95.323554,
                21.269557
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '乌鲁木齐',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                87.817457,
                44.462183
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '蒙古',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                97.016105,
                48.169766
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '乌兹比克斯坦',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                63.864176,
                40.865575
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '阿塞拜疆',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                63.864176,
                40.865575
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '埃尔默迷你',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                76.079981,
                65.44374
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '科米共和国',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                76.079981,
                65.44374
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '新西伯利亚洲',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                76.079981,
                65.44374
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '菲律宾',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                121.153358,
                16.756121
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '文莱',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                114.649914,
                4.449821
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '居港',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                114.649914,
                4.449821
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '呼伦贝尔',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                116.526438,
                48.396934
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '布里亚特共和国',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                112.653807,
                54.926698
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '伊尔库茨克州',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                104.614189,
                56.04443
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '伊尔库茨克州',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                115.082251,
                58.878356
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '大兴安岭',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                123.968145,
                53.084682
            ]
        ]
    },
    {
        fromName: '北京市',
        toName: '哈尔滨',
        coords: [
            [
                116.412318,
                39.914271
            ],
            [
                127.53722,
                45.989693
            ]
        ]
    }
]
const beamScatterData = [
    {
        name: '海门',
        value: [
            121.15,
            31.89,
            9
        ]
    },
    {
        name: '鄂尔多斯',
        value: [
            109.781327,
            39.608266,
            12
        ]
    },
    {
        name: '招远',
        value: [
            120.38,
            37.35,
            12
        ]
    },
    {
        name: '舟山',
        value: [
            122.207216,
            29.985295,
            12
        ]
    },
    {
        name: '烟台',
        value: [
            121.39,
            37.52,
            28
        ]
    },
    {
        name: '福州',
        value: [
            119.3,
            26.08,
            29
        ]
    },
    {
        name: '瓦房店',
        value: [
            121.979603,
            39.627114,
            30
        ]
    },
    {
        name: '即墨',
        value: [
            120.45,
            36.38,
            30
        ]
    },
    {
        name: '抚顺',
        value: [
            123.97,
            41.97,
            31
        ]
    },
    {
        name: '玉溪',
        value: [
            102.52,
            24.35,
            31
        ]
    },
    {
        name: '张家口',
        value: [
            114.87,
            40.82,
            31
        ]
    },
    {
        name: '阳泉',
        value: [
            113.57,
            37.85,
            31
        ]
    },
    {
        name: '莱州',
        value: [
            119.942327,
            37.177017,
            32
        ]
    },
    {
        name: '湖州',
        value: [
            120.1,
            30.86,
            32
        ]
    },
    {
        name: '寿光',
        value: [
            118.73,
            36.86,
            40
        ]
    },
    {
        name: '盘锦',
        value: [
            122.070714,
            41.119997,
            40
        ]
    },
    {
        name: '长治',
        value: [
            113.08,
            36.18,
            41
        ]
    },
    {
        name: '深圳',
        value: [
            114.07,
            22.62,
            41
        ]
    },
    {
        name: '珠海',
        value: [
            113.52,
            22.3,
            42
        ]
    },
    {
        name: '宿迁',
        value: [
            118.3,
            33.96,
            43
        ]
    },
    {
        name: '咸阳',
        value: [
            108.72,
            34.36,
            43
        ]
    },
    {
        name: '铜川',
        value: [
            109.11,
            35.09,
            44
        ]
    },
    {
        name: '平度',
        value: [
            119.97,
            36.77,
            44
        ]
    },
    {
        name: '佛山',
        value: [
            113.11,
            23.05,
            44
        ]
    },
    {
        name: '泸州',
        value: [
            105.39,
            28.91,
            57
        ]
    },
    {
        name: '西宁',
        value: [
            101.74,
            36.56,
            57
        ]
    },
    {
        name: '宜宾',
        value: [
            104.56,
            29.77,
            58
        ]
    },
    {
        name: '呼和浩特',
        value: [
            111.65,
            40.82,
            58
        ]
    },
    {
        name: '成都',
        value: [
            104.06,
            30.67,
            58
        ]
    },
    {
        name: '大同',
        value: [
            113.3,
            40.12,
            58
        ]
    },
    {
        name: '镇江',
        value: [
            119.44,
            32.2,
            59
        ]
    },
    {
        name: '桂林',
        value: [
            110.28,
            25.29,
            59
        ]
    },
    {
        name: '张家界',
        value: [
            110.479191,
            29.117096,
            59
        ]
    },
    {
        name: '宜兴',
        value: [
            119.82,
            31.36,
            59
        ]
    },
    {
        name: '北海',
        value: [
            109.12,
            21.49,
            60
        ]
    },
    {
        name: '西安',
        value: [
            108.95,
            34.27,
            61
        ]
    },
    {
        name: '金坛',
        value: [
            119.56,
            31.74,
            62
        ]
    },
    {
        name: '东营',
        value: [
            118.49,
            37.46,
            62
        ]
    },
    {
        name: '牡丹江',
        value: [
            129.58,
            44.6,
            63
        ]
    },
    {
        name: '遵义',
        value: [
            106.9,
            27.7,
            63
        ]
    },
    {
        name: '绍兴',
        value: [
            120.58,
            30.01,
            163
        ]
    },
    {
        name: '扬州',
        value: [
            119.42,
            32.39,
            164
        ]
    }
]
</script>
<template>
    <th-earth
        class="earth-wrap"
        :stats="true"
        starry-sky
        :aperture="true"
        cloud-cover
    >
        <!-- <th-earth-border type="china" /> -->
        <th-earth-border geojson="world" color="#3ba3d1" />
        <th-earth-border
            geojson="china-border"
            color="#FF5823"
            :width="2"
            :wakeline="true"
        />
        <!-- 轨迹线 -->
        <th-earth-line :data="lineData" color="#fff000" :width="3" />
        <!-- 发光柱 -->
        <th-earth-beam :data="beamScatterData" color="#00FFE5" />
    </th-earth>
</template>
<style lang="scss" scoped>
.earth-wrap {
    height: 100vh;
}
</style>
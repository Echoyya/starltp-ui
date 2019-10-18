<template>
    <div class="fees-table">
        <table cellspacing="0" cellpadding="0" border="0" class="star-table">
            <thead class="fees-header">
                <tr class="fees-header-title">
                    <th colspan="10">
                        {{$t('fees.table4.string1')}}
                    </th>
                </tr>
                <tr>
                    <th rowspan="2">{{$t('fees.table4.string2')}}</th>
                    <th colspan="2" class="fees-header-title"> {{$t('fees.table4.string3')}}</th>
                    <th colspan="2" class="fees-header-title"> {{$t('fees.table4.string4')}}</th>
                    <th colspan="2" class="fees-header-title"> {{$t('fees.table4.string5')}}</th>
                </tr>
                <tr>
                    <th>{{$t('fees.table4.string6')}}</th>
                    <th>{{$t('fees.table4.string7')}}</th>
                    <th>{{$t('fees.table4.string6')}}</th>
                    <th>{{$t('fees.table4.string7')}}</th>
                    <th>{{$t('fees.table4.string6')}}</th>
                    <th>{{$t('fees.table4.string7')}}</th>
                </tr>
            </thead>
            <tbody class="fees-body">
                <tr>
                    <td>{{$t('fees.table4.string15')}}</td>
                    <td>3000-3800</td>
                    <td>5000-8000</td>
                    <td>3500-5000</td>
                    <td>7000-9000</td>
                    <td>6000-8000</td>
                    <td>8000-12000</td>
                </tr>
                <tr>
                    <td colspan="10" class="fees-desc">
                        <p>{{$t('fees.table4.string14')}}:</p>
                        <p>{{$t('fees.table4.string8')}}</p>
                        <p>{{$t('fees.table4.string9')}}</p>
                        <p>{{$t('fees.table4.string10')}}</p>
                        <p>{{$t('fees.table4.string11')}}</p>
                        <p>{{$t('fees.table4.string12')}}</p>
                        <p>{{$t('fees.table4.string13')}}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<style lang="less">
</style>

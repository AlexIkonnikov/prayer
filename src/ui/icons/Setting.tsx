import React, { FC } from "react";
import Svg, {Path} from "react-native-svg";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

export const Setting: FC<TouchableOpacityProps> = ({...outerProps}) => {
    return (
        <TouchableOpacity {...outerProps}>
            <Svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12Z" fill="#72A8BC"/>
                <Path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V3.17399C10.9979 3.6908 10.8448 4.19572 10.5594 4.62661C10.2741 5.0575 9.86895 5.39555 9.39393 5.59914C9.30938 5.63538 9.22042 5.65969 9.12961 5.67157C8.69798 5.82272 8.23333 5.85998 7.781 5.77796C7.26 5.68349 6.77925 5.43512 6.40073 5.06486L6.39285 5.05715L6.33289 4.99711C6.24002 4.90413 6.12934 4.82998 6.00794 4.77965C5.88654 4.72933 5.75642 4.70343 5.625 4.70343C5.49358 4.70343 5.36346 4.72933 5.24206 4.77965C5.12066 4.82998 5.01037 4.90374 4.9175 4.99671L4.91671 4.9975C4.82374 5.09037 4.74998 5.20066 4.69965 5.32206C4.64933 5.44346 4.62343 5.57358 4.62343 5.705C4.62343 5.83642 4.64933 5.96654 4.69965 6.08794C4.74998 6.20934 4.82374 6.31963 4.91671 6.4125L4.98491 6.48069C5.35516 6.85921 5.60349 7.34 5.69796 7.861C5.79055 8.37163 5.73113 8.89797 5.52745 9.37478C5.34189 9.86133 5.01698 10.2827 4.59305 10.5859C4.16054 10.8952 3.64498 11.0673 3.11338 11.0797L3.09 11.08H3C2.73478 11.08 2.48043 11.1854 2.29289 11.3729C2.10536 11.5604 2 11.8148 2 12.08C2 12.3452 2.10536 12.5996 2.29289 12.7871C2.48043 12.9746 2.73478 13.08 3 13.08H3.17399C3.6908 13.0821 4.19572 13.2352 4.62661 13.5206C5.05601 13.8049 5.3932 14.2082 5.59701 14.6811C5.80908 15.1643 5.87211 15.6998 5.77796 16.219C5.68349 16.74 5.43512 17.2207 5.06486 17.5993L5.05715 17.6072L4.9971 17.6671C4.90413 17.76 4.82998 17.8707 4.77965 17.9921C4.72933 18.1135 4.70343 18.2436 4.70343 18.375C4.70343 18.5064 4.72933 18.6365 4.77965 18.7579C4.82998 18.8793 4.90374 18.9896 4.99671 19.0825L4.9975 19.0833C5.09037 19.1763 5.20066 19.25 5.32206 19.3003C5.44346 19.3507 5.57359 19.3766 5.705 19.3766C5.83641 19.3766 5.96654 19.3507 6.08794 19.3003C6.20934 19.25 6.31963 19.1763 6.4125 19.0833L6.48069 19.0151C6.85921 18.6448 7.34 18.3965 7.861 18.302C8.37163 18.2095 8.89796 18.2689 9.37477 18.4725C9.86132 18.6581 10.2827 18.983 10.5859 19.407C10.8952 19.8395 11.0673 20.355 11.0797 20.8866L11.08 20.91V21C11.08 21.2652 11.1854 21.5196 11.3729 21.7071C11.5604 21.8946 11.8148 22 12.08 22C12.3452 22 12.5996 21.8946 12.7871 21.7071C12.9746 21.5196 13.08 21.2652 13.08 21V20.83L13.08 20.826C13.0821 20.3092 13.2352 19.8043 13.5206 19.3734C13.805 18.944 14.2083 18.6067 14.6812 18.4029C15.1643 18.1909 15.6998 18.1279 16.219 18.222C16.74 18.3165 17.2207 18.5649 17.5993 18.9351L17.6071 18.9429L17.6671 19.0029C17.76 19.0959 17.8707 19.17 17.9921 19.2203C18.1135 19.2707 18.2436 19.2966 18.375 19.2966C18.5064 19.2966 18.6365 19.2707 18.7579 19.2203C18.8793 19.17 18.9896 19.0963 19.0825 19.0033L19.0833 19.0025C19.1763 18.9096 19.25 18.7993 19.3003 18.6779C19.3507 18.5565 19.3766 18.4264 19.3766 18.295C19.3766 18.1636 19.3507 18.0335 19.3003 17.9121C19.25 17.7907 19.1763 17.6804 19.0833 17.5875L19.0151 17.5193C18.6448 17.1408 18.3965 16.66 18.302 16.139C18.2079 15.6198 18.2709 15.0843 18.4829 14.6012C18.6867 14.1283 19.024 13.725 19.4534 13.4406C19.8843 13.1552 20.3892 13.0021 20.906 13L20.91 13L21 13C21.2652 13 21.5196 12.8946 21.7071 12.7071C21.8946 12.5196 22 12.2652 22 12C22 11.7348 21.8946 11.4804 21.7071 11.2929C21.5196 11.1054 21.2652 11 21 11H20.83L20.826 11C20.3092 10.9979 19.8043 10.8448 19.3734 10.5594C18.9425 10.2741 18.6045 9.86896 18.4009 9.39393C18.3646 9.30938 18.3403 9.22042 18.3284 9.12961C18.1773 8.69798 18.14 8.23332 18.222 7.781C18.3165 7.26 18.5649 6.77925 18.9351 6.40073L18.9428 6.39285L19.0029 6.3329C19.0959 6.24002 19.17 6.12934 19.2203 6.00794C19.2707 5.88654 19.2966 5.75641 19.2966 5.625C19.2966 5.49359 19.2707 5.36346 19.2203 5.24206C19.17 5.12066 19.0963 5.01037 19.0033 4.9175L19.0025 4.91671C18.9096 4.82374 18.7993 4.74998 18.6779 4.69965C18.5565 4.64933 18.4264 4.62343 18.295 4.62343C18.1636 4.62343 18.0335 4.64933 17.9121 4.69965C17.7907 4.74998 17.6804 4.82374 17.5875 4.91671L17.5193 4.98491C17.1408 5.35516 16.66 5.60349 16.139 5.69796C15.6198 5.79211 15.0843 5.72908 14.6011 5.51701C14.1282 5.3132 13.7249 4.97601 13.4406 4.54661C13.1552 4.11572 13.0021 3.6108 13 3.09399L13 3.09V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2ZM19.4 15L20.3149 15.4038C20.2624 15.5226 20.2468 15.6544 20.27 15.7822C20.2929 15.9086 20.3527 16.0253 20.4419 16.1177L20.4967 16.1725C20.4968 16.1726 20.4966 16.1724 20.4967 16.1725C20.7755 16.451 20.997 16.7822 21.1479 17.1462C21.2989 17.5104 21.3766 17.9008 21.3766 18.295C21.3766 18.6892 21.2989 19.0796 21.1479 19.4438C20.9969 19.808 20.7756 20.1389 20.4967 20.4175L19.79 19.71L20.4975 20.4167C20.2189 20.6956 19.888 20.9169 19.5238 21.0679C19.1596 21.2189 18.7692 21.2966 18.375 21.2966C17.9808 21.2966 17.5904 21.2189 17.2262 21.0679C16.8622 20.917 16.5314 20.6959 16.2529 20.4171C16.2528 20.417 16.253 20.4172 16.2529 20.4171L16.1977 20.3619C16.1053 20.2727 15.9886 20.2129 15.8622 20.19C15.7344 20.1668 15.6026 20.1824 15.4838 20.2349L15.474 20.2392C15.3574 20.2891 15.258 20.372 15.1881 20.4777C15.1183 20.583 15.0808 20.7063 15.08 20.8325V21C15.08 21.7957 14.7639 22.5587 14.2013 23.1213C13.6387 23.6839 12.8757 24 12.08 24C11.2843 24 10.5213 23.6839 9.95868 23.1213C9.39607 22.5587 9.08 21.7957 9.08 21V20.9244C9.07526 20.7972 9.03327 20.6741 8.95914 20.5704C8.88326 20.4644 8.77723 20.3836 8.65482 20.3385C8.63505 20.3313 8.61551 20.3234 8.59624 20.3149C8.47742 20.2624 8.34561 20.2468 8.21782 20.27C8.09142 20.2929 7.97467 20.3527 7.8823 20.4419L7.8275 20.4967C7.82737 20.4968 7.82763 20.4966 7.8275 20.4967C7.54896 20.7755 7.21784 20.997 6.85382 21.1479C6.48963 21.2989 6.09925 21.3766 5.705 21.3766C5.31075 21.3766 4.92037 21.2989 4.55618 21.1479C4.19233 20.9971 3.86174 20.7761 3.58329 20.4975C3.30436 20.2189 3.08308 19.888 2.93211 19.5238C2.78113 19.1596 2.70343 18.7692 2.70343 18.375C2.70343 17.9808 2.78113 17.5904 2.93211 17.2262C3.08308 16.862 3.30436 16.5311 3.58329 16.2525L3.63811 16.1977C3.72728 16.1053 3.78713 15.9886 3.81005 15.8622C3.83322 15.7344 3.81758 15.6026 3.76514 15.4838L3.76081 15.474C3.71087 15.3574 3.62801 15.258 3.52232 15.1881C3.41704 15.1183 3.29374 15.0808 3.1675 15.08H3C2.20435 15.08 1.44129 14.7639 0.87868 14.2013C0.316071 13.6387 0 12.8756 0 12.08C0 11.2844 0.316071 10.5213 0.87868 9.95868C1.44129 9.39607 2.20435 9.08 3 9.08H3.07564C3.20283 9.07526 3.32591 9.03327 3.42955 8.95914C3.53564 8.88326 3.61644 8.77723 3.66146 8.65482C3.66874 8.63505 3.67663 8.61551 3.68514 8.59624C3.73758 8.47742 3.75322 8.34561 3.73005 8.21782C3.70713 8.09142 3.64728 7.97468 3.5581 7.88231L3.50329 7.8275C3.22436 7.54888 3.00308 7.21802 2.85211 6.85382C2.70113 6.48963 2.62343 6.09925 2.62343 5.705C2.62343 5.31075 2.70113 4.92037 2.85211 4.55618C3.00301 4.19216 3.22415 3.86143 3.50289 3.58289C3.78143 3.30415 4.11216 3.08301 4.47618 2.93211C4.84037 2.78113 5.23075 2.70343 5.625 2.70343C6.01925 2.70343 6.40963 2.78113 6.77382 2.93211C7.13802 3.08308 7.46888 3.30436 7.7475 3.58329L7.80231 3.6381C7.89468 3.72728 8.01142 3.78713 8.13782 3.81005C8.26561 3.83322 8.39742 3.81758 8.51624 3.76514C8.58027 3.73687 8.64693 3.71549 8.71507 3.70122C8.78479 3.6539 8.84498 3.59323 8.89195 3.52232C8.96167 3.41704 8.99921 3.29374 9 3.1675V3C9 2.20435 9.31607 1.44129 9.87868 0.87868C10.4413 0.316071 11.2044 0 12 0C12.7956 0 13.5587 0.316071 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3V3.0875C15.0008 3.21374 15.0383 3.33704 15.1081 3.44232C15.178 3.54801 15.2774 3.63092 15.3939 3.68086L15.4038 3.68508C15.5226 3.73752 15.6544 3.75322 15.7822 3.73005C15.9086 3.70713 16.0253 3.64728 16.1177 3.55811L16.1725 3.50329C16.4511 3.22436 16.782 3.00308 17.1462 2.85211C17.5104 2.70113 17.9008 2.62343 18.295 2.62343C18.6892 2.62343 19.0796 2.70113 19.4438 2.85211C19.808 3.00308 20.1389 3.22436 20.4175 3.50329C20.6961 3.78174 20.9171 4.11233 21.0679 4.47618C21.2189 4.84037 21.2966 5.23075 21.2966 5.625C21.2966 6.01925 21.2189 6.40963 21.0679 6.77382C20.917 7.13784 20.6959 7.46857 20.4171 7.7471C20.417 7.74724 20.4172 7.74697 20.4171 7.7471L20.3619 7.80231C20.2727 7.89468 20.2129 8.01142 20.19 8.13782C20.1668 8.26561 20.1824 8.39742 20.2349 8.51624C20.2631 8.58027 20.2845 8.64692 20.2988 8.71507C20.3461 8.78479 20.4068 8.84498 20.4777 8.89195C20.583 8.96167 20.7063 8.99921 20.8325 9H21C21.7957 9 22.5587 9.31607 23.1213 9.87868C23.6839 10.4413 24 11.2043 24 12C24 12.7957 23.6839 13.5587 23.1213 14.1213C22.5587 14.6839 21.7957 15 21 15H20.9125C20.7863 15.0008 20.663 15.0383 20.5577 15.1081C20.452 15.178 20.3691 15.2774 20.3191 15.3939L19.4 15Z" fill="#72A8BC"/>
            </Svg>
        </TouchableOpacity>
    )
};